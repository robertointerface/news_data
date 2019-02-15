# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.views import APIView

from rest_framework.permissions import AllowAny, IsAuthenticated
from django.http import HttpResponse
from rest_framework.response import Response
import json
from xlwt import Workbook, XFStyle


class ConvertToExcel(APIView):
    """
    Recieve JSON data and transform it into an excel file with the corresponding data by using 'xlwt' library
    """
    permission_classes = (AllowAny,)

    def __init__(self):
        APIView.__init__(self)
        self._file_title = ''
        self._topic = ''
        self._times = []
        self.__workbook = Workbook(encoding='utf-8')
        self._response = HttpResponse(content_type='application/ms-excel')
        self._head_row_style = XFStyle()
        self._data_row_style = XFStyle()
        self.__start_row = 5
        self.__start_column = 5
        self.__message_row = 2
        self.__message_col = 2

    def __repr__(self):
        class_name = type(self).__name__
        return '{} {!r}'.format('<class', class_name)

    def post(self, request, format=None):
        try:
            request_data = self.request.data
            self._topic = request_data['searchObject']['Topic']['name']
            self._times = request_data['searchObject']['SelectedTimes']
            self._file_title = self.built_title('xls')
            self._response['Content-Disposition'] = 'attachment; filename="{file_name}"'.format(file_name=self._file_title)
            self._response['Set-Cookie'] = 'fileDownload=true; Path=/'
            work_sheet = self.create_work_sheet(self._file_title)
            self._head_row_style.font.bold = True
            #Write a message in a cell, message briefly describes the data
            work_sheet.write(self.__message_row, self.__message_col, self._topic, self._head_row_style)

            work_sheet.write(self.__start_row, self.__start_column, 'countries', self._head_row_style)

            #create table head composed of the data times
            for i, column in enumerate(self._times):
                work_sheet.write(self.__start_row, ((self.__start_column + 1) + i), column, self._head_row_style)
                work_sheet.col(i).width = 4 * 256
            #Insert data into table
            for i, row in enumerate(request_data['result']):
                work_sheet.write((self.__start_row + 1) + i, self.__start_column, row['name'], self._data_row_style)
                for x, value in enumerate(row['values']):
                    work_sheet.write((self.__start_row + 1) + i, (self.__start_column + 1) + x, value, self._data_row_style)
            self.__workbook.save(self._response)
            return self._response
        except KeyError:
            return Response(None, status=400, content_type=json)
        except ValueError:
            return Response(None, status=400, content_type=json)
        except Exception as e:
            return Response(None, status=400, content_type=json)


    def built_title(self, extension):
        """
        Built file title which is always 'tablenew_data.[extension]'
        :return:
        """
        return '{file_name}.{file_format}'.format(file_name='tablenew_data', file_format=extension)

    def create_work_sheet(self, sheet_name):
        return self.__workbook.add_sheet(sheet_name)

    def create_columns(self, result):
        return [country['name'] for country in result]

