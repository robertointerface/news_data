# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render

from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import json

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


class GetNewList(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            page = int(params['page'])
            news = NewSerializer(New.objects.all()[page:page+2], many=True)
            content = JSONRenderer().render(news.data)
            return Response(content, status=200, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)


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