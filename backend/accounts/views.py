# -*- coding: utf-8 -*-

"""
    accounts views - classes used to handle API calls to 'accounts' django app, urls specified
    on acccounts.urls

    Members:
    # sign_up - function used to create new users (model User), function call when
                url 'accounts/signup'
    # edit_user_first_time - function call when user sets his username and password
                            for the first time
    # verify_token -
"""
from __future__ import unicode_literals
import json
import hashlib
import random
import string
import django.db
from django.contrib.auth.models import User
from django.http import JsonResponse, RawPostDataException
from django.db.models import ObjectDoesNotExist
from django.db import DatabaseError
from rest_framework import permissions, status
from rest_framework.serializers import ValidationError
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework_jwt.settings import api_settings
from google.oauth2 import id_token
from google.auth.transport import requests
from .serializers import UserSerializer, UserSerializerWithToken, UserInfoSerializer,\
    FollowSerializer, UserPrivateInfoSerializer
from .models import User

# SECURITY IMPORTS
TOKEN_INFO_URL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants
    from google.appengine.api import urlfetch
    from google.appengine.api import mail
    from google.appengine.api.mail_errors import InvalidEmailError, BadRequestError
    GOOGLE_CLIENT = json.loads(open('backend/accounts/g_client_secret.json', 'r').
                               read())['web']['client_id']


#@api_view(['POST'])
@permission_classes((AllowAny, ))
def sign_up(request):
    """
    Sign up new user given a valid username & email (username and email are verified
    previously on Frontend) still they are verified by SQL Model specifications.

    @param
        request - http.request object with Username and email provided by the user.

    @return:
        On success - Json response with 'status' 200 and confirmation message to be displayed
                    at frontend.
        On failure - Json response with 'status' 400 and failure message to be displayed
                    at frontend.
    """
    try:
        # Convert http.request.body into Json object
        request_data = json.loads(request.body)
        username = request_data['username']
        email = request_data['email']
        activation_token = create_activation_key(username)
        fields = {'username': username,
                  'email': email,
                  'activation_key': activation_token}
        User.objects.create(
            username=username,
            email=email,
            activation_key=activation_token
        )
        response = JsonResponse({
            'status': 200,
            'content': '''We have sent you an email, please follow the steps in order
                        to finalize the process'''
        })
    except django.db.DatabaseError:
        response = JsonResponse({
            'status': 400,
            'content': '''There has been an error, please verify that your email is the correct one. 
                        If the error persists please contact us'''
        })
    except RawPostDataException:
        response = JsonResponse({
            'status': 400,
            'content': """There has been an error, please verify that your email is the correct one. 
                If the error persists please contact us."""
        })
    finally:
        return response


@permission_classes((AllowAny, ))
def edit_user_first_time(request):
    """
    Set password for a new created User and after the user has verified its email.
    A token is provided to the user and the token is verified
    @param
        request - request object with token emailed to user, password and username. Token emailed to
                user is used to verify the user since there is no password at this stage.
    @return:
        On success - JsonResponse with 'status' 200 and confirmation message to be
                    displayed at frontend
        On failure - JsonResponse with 'status' 400 and failure/error message to be
                    displayed at frontend
    """
    try:
        request_data = json.loads(request.body)
        # Query user with the provided token, if token is wrong the user is not queried and error
        # 'ObjectDoesNotExist' is raised
        user = User.objects.get(activation_key=request_data['token'])
        user.set_password(request_data['password'])
        user.username = request_data['username']
        user.save()
        response = JsonResponse({
            'status': 200,
            'content':
                """information saved correctly.
                """
        })
    except ObjectDoesNotExist:
        response = JsonResponse({
            'status': 400,
            'content': """There has been an error, please verify that your email is the correct one. 
            If the error persists please contact us."""
        })
    except django.db.DatabaseError:
        response = JsonResponse({
            'status': 400,
            'content':
                """There has been an error, please verify that your email is the correct one. 
                If the error persists please contact us.
                """
        })
    finally:
        return response


@permission_classes((AllowAny, ))
def verify_token(request, token):
    """
    Email verification through Verifying token sent to user email.
    @params
        request - http.request object
        token - token emailed to user to verify his email account, this token must match the one
        saved on the sql database.

    @return
        On success - JsonResponse with status '200' and message to be displayed
        On failure - JsonResponse with status '400' and message to be displayed
    """
    try:
        user = User.objects.get(activation_key=token)
        if not user.email_confirmed:
            user.email_confirmed = True
            user.save()
            response = JsonResponse({
                'status': 200,
                'content': """Your account has been verified correctly please set a password"""
            })
        else:
            response = JsonResponse({
                'status': 200,
                'content': """Account was already confirmed """
            })
    except django.db.DatabaseError:
        response = JsonResponse({
            'status': 500,
            'content': """There was a problem """
        })
    finally:
        return response


@permission_classes((AllowAny, ))
def google_signin(request):
    """
    Create user account or log in with GoogleLogin from 'react-google-login''

    @param
        request - http.request object with token from google.

    @return
        On success - JsonResponse with status '200' and generated JWT
        On failure - JsonResponse with status '400' and message to be displayed
    """
    try:
        request_data = json.loads(request.body)
        token = request_data['id_token']
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT)
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('wrong issuer')
        userid = idinfo['sub']
        url = '{}{}'.format(TOKEN_INFO_URL, token)
        result = urlfetch.fetch(url)
        result = json.loads(result.content)
        if result is None:
            raise ValueError('no user returned')
        if result['sub'] != userid:
            raise ValueError("Token's user ID doesn't match given user ID.")
        if result['aud'] != GOOGLE_CLIENT:
            raise ValueError("Token's client ID does not match app's.")
        username = result['name']
        email = result['email']
        user = User.objects.filter(email=email).first()
        if user is None:
            user = User.objects.create(
                username=username,
                email=email,
                external_auth=True
            )
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        response = JsonResponse({
            'status': 200,
            'token': token,
            'user': UserSerializer(user, context={'request': request}).data
        })
    except ValueError:
        response = JsonResponse({
            'status': 500,
            'error': ValueError.message
        })
    except django.db.DatabaseError:
        response = JsonResponse({
            'status': 500,
            'error': 'error in database'
        })
    except ObjectDoesNotExist:
        return Response(None, status=400, content_type=json)
    finally:
        return response


class ResetPassword(APIView):
    """
    Resets use password to a random generated password fo 6 characters.

    Main methods:
        post - Overwrite APIView post method, create a random password and save it for a specific user located
        by email.
        _send_email - Send email to user with the generated password.
    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        """
        Recieve email, locate user with that email, generate password and email to that user.

        @param
            request - http.request with 'email' on its body

        @return
            On success - JsonResponse with status 200 and success message plus email sent to user with new password
            On Failure - JsonResponse with status 400 with failure message
        """
        try:
            request_data = self.request.data
            email = request_data['email']
            user = User.objects.get(email=email)
            new_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(6))
            user.set_password(new_password)
            self._send_email(user, new_password)
            # save after email has been sent, otherwise the password is set and nobody know what it is.
            user.save()
            return Response('a new password has been sent to the provided email, please use it to log in.',
                            status=200,
                            content_type=json)
        except ObjectDoesNotExist:
            return Response('Invalid provided email, we do not have an account with that email',
                            status=400,
                            content_type=json)
        except ValueError:
            return Response('Operation could not be completed please try again later',
                            status=400,
                            content_type=json)

    def _send_email(self, user, new_password):
        """
        Send email to specific user with new password.

        @param
            user - User model object
            new_password - string of random generated 6 characters

        @return
            On Success - None
            On Failure - Raise ValueError to propagate.
        """
        try:
            subject = 'Tablenew.com reset password.'
            email_body = """
                    Dear {username}:
                        Your new requested password is the following, please contact us if you have not requested
                        this password.
    
                        {new_password}
    
                        regards.
                        Tablenew.com team
    
                    """.format(username=user.username, new_password=new_password)
            mail.send_mail(
                sender='robertointerface@gmail.com',
                to=user.email,
                subject=subject,
                body=email_body
            )
        except (InvalidEmailError, BadRequestError):
            raise ValueError


class UserPublicInfo(APIView):
    """
    API call to get user public information by providing the user 'username'
    @param
        username - username
    @return
        On success - rest_framework.response with status 200 and User public information in JSON format
        On failure - rest_framework.response with status 400

    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            username = params['username']
            user = UserInfoSerializer(User.objects.filter(username=username).first(), many=False)
            if user.instance is not None:
                content = JSONRenderer().render(user.data)
                return Response(content, status=200, content_type=json)
            raise ObjectDoesNotExist
        except (DatabaseError, KeyError):
            return Response(None, status=400, content_type=json)
        except ObjectDoesNotExist:
            return Response(None, status=400, content_type=json)


class SetUserFollow(APIView):
    """
        API call used to set the logged in user to follow a specific user by providing the username

        Main methods:
            post - Override post method, create 'Follow' object in table 'accounts.Follow'
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        """
        Set user A follows User B at user A request.
        @param
            request - http.request, Post request with JWT code required for authentication  & body with
            the username to start following.
            format - None

        @return:
            On success - rest_framework.response.Response with status 200, no content
            On failure - rest_framework.response.Response with status 400
        """
        try:
            request_data = self.request.data
            user = request.user
            user_to_follow_name = request_data['toFollow']
            user_to_follow = User.objects.filter(username=user_to_follow_name).first()
            serializer = FollowSerializer(data={'follows': user.id,
                                                'followed': user_to_follow.id})
            if serializer.is_valid(raise_exception=True):
                serializer.create(serializer.validated_data)
        except (KeyError, DatabaseError, ValidationError):
            return Response(None, status=400, content_type=json)
        else:
            return Response(None, status=200, content_type=json)


class SetUserUnFollow(APIView):
    """
        API call used to un-follow a user.

        Main methods:
            post - Override post method, delete 'Follow' object in table 'accounts.Follow'
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        """
        user A stops following user B at user A request.
         @param
            request - http.request, Post request with JWT code required for authentication & body with
            the username to stop following.
            format - None

        @return:
            On success - rest_framework.response.Response with status 200, no content
            On failure - rest_framework.response.Response with status 400
        """
        try:
            request_data = self.request.data
            user = request.user
            user_to_unfollow = request_data['toUnFollow']
            is_following = user.user_rel_follows.filter(followed__username=user_to_unfollow).first()
            if is_following is not None:
                is_following.delete()
        except DatabaseError:
            return Response(None, status=400, content_type=json)
        else:
            return Response(None, status=200, content_type=json)


class IsFollowing(APIView):

    """Verifies is logged in user is following another user by providing its username

        Main methods:
            get - override APIView get, verify if logged in user is following another user by providing
            the username.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        Verify if user A is following user B by checking 'accounts.Follow' table
        @param
            request - http.request, GET method
            format - None

        @return:
            On success - rest_framework.response.Response with status 200, no content
            On failure - rest_framework.response.Response with status 400
        """
        try:
            params = request.query_params
            user = self.request.user
            response = {'following': False}
            is_following = user.user_rel_follows.filter(followed__username=params['username']).first()
            if is_following is not None:
                response['following'] = True
        except (KeyError, DatabaseError):
            return Response(None, status=400, content_type=json)
        else:
            return Response(response, status=200, content_type=json)


def create_activation_key(username):
    """
    create user token to be sent for email verification, use sha1 encoding with username and
    random generated sequence of 5 characters.
    @param
        username - username
    @return
        activation_key - Token
    """
    salt = hashlib.sha1(str(random.random())).hexdigest()[:5]
    if isinstance(username, unicode):
        usernamesalt = username.encode('utf8')
    activation_key = hashlib.sha1(salt + usernamesalt).hexdigest()
    return activation_key


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditUser(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        try:
            user = request.user
            serialized_user = UserPrivateInfoSerializer(user, many=False)
            if serialized_user.instance is not None:
                content = JSONRenderer().render(serialized_user.data)
                return Response(content, status=200, content_type=json)
        except (DatabaseError, AttributeError):
            return Response(None, status=400, content_type=json)

    def post(self, request, format=None):
        try:
            user = request.user
            request_data = self.request.data
            serializer = UserPrivateInfoSerializer(data={
                                                         'first_name': request_data['first_name'],
                                                         'last_name': request_data['last_name'],
                                                         'location': request_data['location'],
                                                            'about_me': request_data['about_me']})
            if serializer.is_valid(raise_exception=True):
                serializer.update(user, serializer.validated_data)
        except ValidationError:
            return Response(None, status=400, content_type=json)
        except (DatabaseError, AttributeError, KeyError):
            return Response(None, status=400, content_type=json)
        else:
            data = serializer.data
            return Response(data, status=200, content_type=json)


class ChangePassword(APIView):

    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        try:
            user = request.user
            request_data = self.request.data
            password = request_data['password']
            user.set_password(password)
            user.save()
            #self._send_email(user)
            return Response(None, status=200, content_type=json)
        except KeyError:
            return Response(None, status=400, content_type=json)

    def _send_email(self, user):
        subject = 'Tablenew.com verification email.'
        email_body = """
        Dear {username}:
            Your password has been modified, if you did not perform this action please send an email to 
            the tablenew team.
            
            regards
            Tablenew.com team
        """.format(username=user.username)
        try:
            mail.send_mail(
                sender='robertointerface@gmail.com',
                to=user.email,
                subject=subject,
                body=email_body
            )
        except (InvalidEmailError, BadRequestError):
            pass