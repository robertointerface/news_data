# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponseRedirect
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
from django.http import RawPostDataException
from django.shortcuts import get_object_or_404

try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants

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
def verify_token(request, token):
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
            respnse = JsonResponse({
                'status': 500,
                'content': """There was a problem """
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