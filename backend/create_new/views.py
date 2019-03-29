# -*- coding: utf-8 -*-
"""
    create_new views - classes used to handle API calls to 'create_new' django app,
    urls specified on create_new.urls

    Members:
    # PublishLongNew - Class used to create rows on table 'New'

"""

from __future__ import unicode_literals
import json
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import ParseError
from rest_framework.views import APIView
from rest_framework.serializers import ValidationError
from django.db import DatabaseError
from .serializers import NewSerializer


class PublishLongNew(APIView):
    """
    Class dedicated to API call 'createnew/publishlongnew', authentication required.
    Method
        post - Create 'New' model object.

    """
    permission_classes = (IsAuthenticated, )

    def post(self, request, format=None):
        """
        Save New created by user.

        @param
            request - http.request object with 'New' data in the body
        @return:
            On success - Response with status=200
            on Failure -  Response with status=400
        """
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