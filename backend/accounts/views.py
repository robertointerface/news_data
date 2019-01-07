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
try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants

@api_view(['POST'])
@permission_classes((AllowAny, ))
def sign_up(request):
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
        return JsonResponse({
            'status': 200,
            'content': 'ok'
        })
    except django.db.DatabaseError:
        return JsonResponse({
            'status': 400,
            'content':
                """There has been an error, please verify that your email is the correct one. 
                If the error persists please contact us.
                """
        })








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