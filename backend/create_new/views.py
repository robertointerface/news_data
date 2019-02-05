# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
import json
from .models import New


class PublishLongNew(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, format=None):
        request_data = json.loads(request['body'])
        print(request_data)
        user = request.user

