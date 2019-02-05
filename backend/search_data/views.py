# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from google.appengine.api import urlfetch
from django.shortcuts import render
from django.db import DatabaseError
from decorators import ajax_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
import json

urlfetch.set_default_fetch_deadline(15) #set fetching time limit to 15 seconds,
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
import functools
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser

from DataBasesModel.EurostatModel import Eurostat
from DataBasesModel.OECDModel import OECD
from DataBasesModel.UNESCOModel import UNESCO
from DataBasesModel.APIKeys import api_keys
from .models import UserData


class IndicatorsDict(dict):
    def __missing__(self, key):
        if isinstance(key, str):
            raise KeyError(key)
        return self[str(key)]

    def get(self, key, default=None):
        try:
            topics = self[key]
            return topics
            #indicators = {sector: topics for sector, topics in self if sector == sector_key}
        except KeyError:
            return default

    def get_indicators(self, sector_key, topic_key, version, default=None):
        try:
            indicators = self[sector_key][topic_key][version]['indicators']
            return indicators
        except KeyError:
            return default

    def get_units(self, sector_key, topic_key, version, default=None):
        try:
            units = self[sector_key][topic_key][version]['units']
            return units
        except KeyError:
            return default

    def __contains__(self, sector_key):
        return sector_key in self.keys() or str(sector_key) in self.keys()


class GetIndicators(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        try:
            request_data = request.data
            sector = request_data['sector']
            topic = request_data['topic']
            third_party = request_data['ThirdPartyAPI']
            version = request_data['version']
            response = {
                'indicators': {},
                'units': {}
            }
            indicator_dict = self.get_api(third_party)
            response['indicators'] = indicator_dict.get_indicators(sector, topic, version)
            response['units'] = indicator_dict.get_units(sector, topic, version)
            if (response['indicators'] and response['units']) is not None:
                return JsonResponse({
                    'status': 'ok',
                    'data': response
                })
            else:
                raise KeyError

        except KeyError:
            print 'puto'

    def get_api(self, third_party):
        if third_party == 'EU':
            return IndicatorsDict(Eurostat)
        elif third_party == 'OECD':
            return IndicatorsDict(OECD)
        elif third_party == 'UNESCO':
            return IndicatorsDict(UNESCO)
        else:
            raise KeyError





class MakeApiCall(APIView):
    permission_classes = (AllowAny,)
    api = ''

    def post(self, request, format=None):
        request_data = self.request.data
        api_url = request_data['APIUrl']
        self.api = request_data['API']
        api_key = self.get_api_keys()
        try:
            if api_key is not None:
                api_url = '{api_url}{key_name}={key}'.format(api_url=api_url, key_name=api_key[1], key=api_key[2])
            headers = {'Content-Type': 'application/json'}
            result = urlfetch.fetch(
                url=api_url,
                method=urlfetch.GET,
                headers=headers)
            print('result: ' + result.content)
            if result.status_code == 200:
                api_result = {
                    'status': 200,
                    'result': result.content
                }
            else:
                raise urlfetch.Error
        except urlfetch.Error:
            print('urlfetch.Error: ' + urlfetch.Error)
            api_result = {
                'status': 400
            }
        return JsonResponse(api_result)

    def get_api_keys(self):
        for api_key in api_keys:
            if api_key[0] == self.api:
                return api_key
        return None


class SaveData(APIView):
    """
    Saves third party data (queried by the user) into table UserData.
    the API url that was used to save the data is hashed, the purpose of this is to avoid duplicate saving of the same
    data. If the data that is going to be saved was already saved, it will be found and not saved.
    """
    permission_classes = (IsAuthenticated, )

    def __repr__(self):
        class_name = type(self).__name__
        return'{}'.format(class_name)

    def post(self, request, format=None):
        try:
            request_data = self.request.data
            data_to_save = request_data['DataToSave']
            api_url = request_data['APIUrl']
            api_hash = hash(api_url)
            user = request.user
            UserData.objects.create(
                data=data_to_save,
                hashed=api_hash,
                saved_by=user
            )
            response = JsonResponse({
                'status': 200,
            })
        except DatabaseError:
            response = JsonResponse({
                'status': 500,
                'content': """There was a problem """
            })
        finally:
            return response

