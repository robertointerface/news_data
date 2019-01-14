# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView


class PublishLongNew(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, format=None):
        user = request.user
        print ('user: ' + user)
