# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
from django.shortcuts import render
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants
    from backend.create_new.models import New
    from backend.create_new.serializers import NewSerializer
    from backend.accounts.models import User

class GetNewList(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            # is required to sub 1 as data is saved starting with 0 and not 1
            page = int(params['page']) - 1
            # load in steps of 2, if want to load in steps of 3 just change *2 for *3 and so on
            news = NewSerializer(New.objects.all()[page*2:(page*2)+2], many=True)
            content = JSONRenderer().render(news.data)
            return Response(content, status=200, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)


class GetNewsCount(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            news = dict({
                'newsCount': New.objects.count()
            })
        except DatabaseError:
            news = dict({
                'newsCount': 0
            })
        else:
            return Response(news, status=200, content_type=json)


class GetNew(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            new_id = params['id']
            new = NewSerializer(New.objects.filter(id=new_id).first(), many=False)
            content = JSONRenderer().render(new.data)
            return Response(content, status=200, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)
        except ValueError:
            return Response(None, status=400, content_type=json)


class GetUserPublishedNews(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            username = params['username']
            user = User.objects.filter(username=username).first()
            news = NewSerializer(user.user_created_new.all(), many=True)
            content = JSONRenderer().render(news.data)
        except DatabaseError:
            return Response(None, status=400, content_type=json)
