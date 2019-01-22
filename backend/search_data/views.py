# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from google.appengine.api import urlfetch
from django.shortcuts import render
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


from DataBasesModel.EurostatModel import Eurostat
from DataBasesModel.OECDModel import OECD
from DataBasesModel.UNESCOModel import UNESCO

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
            request_data = json.loads(request.body)
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

    def post(self, request, format=None):
        request_data = json.loads(request.body)
        api_url = request_data['APIUrl']
        try:
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
        except urlfetch.Error:
            print('urlfetch.Error: ' + urlfetch.Error)
            api_result = {
                'status': 400
            }
        return JsonResponse(api_result)

    def get_api_keys

