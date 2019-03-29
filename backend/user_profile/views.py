# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from django.db import DatabaseError

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from user_profile.serializers import GetUserDataSerializer
else:
    from backend.user_profile.serializers import GetUserDataSerializer


class GetUserData(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request, format=None):
        try:
            user = request.user
            params = request.query_params
            page = int(params['page']) - 1
            user_data = GetUserDataSerializer(user.user_saved_data.all()[page * 2:(page * 2) + 2], many=True)
            content = JSONRenderer().render(user_data.data)
            response = {'tableCount': user.user_saved_data.count(),
                        'tables': content}
            return Response(response, status=200, content_type=json)
        except (DatabaseError, AttributeError):
            return Response(None, status=400, content_type=json)
        except KeyError:
            return Response(None, status=400, content_type=json)

