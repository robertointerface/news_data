# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.views import APIView

from rest_framework.permissions import AllowAny, IsAuthenticated
from xlwt import Workbook

class ConvertToExcel(APIView):
    permission_classes = (AllowAny,)

    def __init__(self):
        APIView.__init__(self)
        self._file_title = ''
        self._workbook = Workbook(encoding='utf-8')

    def __repr__(self):
        class_name = type(self).__name__
        return '{} {!r}'.format('<class', class_name)

    def post(self, request, format=None):
        request_data = self.request.data




