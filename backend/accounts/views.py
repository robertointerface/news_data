# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from rest_framework import permissions, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken
import json
import hashlib
import random
from .models import User
import django.db
from django.db.models import ObjectDoesNotExist
from django.http import RawPostDataException
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework_jwt.settings import api_settings
###SECURITY IMPORTS

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
    GOOGLE_CLIENT = json.loads(open('backend/accounts/g_client_secret.json', 'r').read())['web']['client_id']


#@api_view(['POST'])
@permission_classes((AllowAny, ))
def sign_up(request):
    """
    Sign up new user given a valid username & email (username and email are verified previously on Frontend).
    :param request: http.request object.
    :return: Json response
    """
    try:
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
            'content': 'We have sent you an email, please follow the steps in order to finalize the process'
        })
    except django.db.DatabaseError:
        response = JsonResponse({
            'status': 400,
            'content':
                """There has been an error, please verify that your email is the correct one. 
                If the error persists please contact us.
                """
        })
    except RawPostDataException:
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
def edit_user_first_time(request):
    """
    Set password for a new created and emial verified user.
    :param request: request object with token emailed to user, password and username. Token emailed to user
    is used to verify the user since there is no password at this stage.
    :return: JsonResponse.
    """
    try:
        request_data = json.loads(request.body)
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
            'content':
                """There has been an error, please verify that your email is the correct one. 
                If the error persists please contact us.
                """
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
    :param request: Request object
    :param token: Token to be verified
    :return: JSON response.
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

    :param request:
    :return:
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
        user = User.objects.get(email=email)
        if user is None:
            User.objects.create(
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
    finally:
        return response

def create_activation_key(username):
    '''
    Create token verification key
    :param username: username string.
    :return: token (activation key)
    '''
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