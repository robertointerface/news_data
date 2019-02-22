# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.serializers import ValidationError
import json
from parser import ParserError
from rest_framework.response import Response
from rest_framework.parsers import ParseError
from .serializers import NewSerializer
from django.http import JsonResponse
from django.db import DatabaseError


class PublishLongNew(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, format=None):
        try:
            request_data = self.request.data['newData']
            user = request.user
            data_to_save = dict({'new_title': request_data['title'],
                                 'headline1': request_data['headline1'],
                                 'headline2': request_data['headline2'],
                                 'headline3': request_data['headline3'],
                                 'content': request_data['content'],
                                 'tables': request_data['references']['tables'],
                                 'charts': request_data['references']['charts'],
                                 'created_by': user.username})
            serializer = NewSerializer(data=data_to_save)
            if serializer.is_valid(raise_exception=True):
                serializer.create(serializer.validated_data)
        except ParseError:
            return Response(None, status=400, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)
        except ValidationError:
            return Response(None, status=400, content_type=json)
        else:
            return Response(None, status=200, content_type=json)