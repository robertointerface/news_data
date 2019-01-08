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
from DataBasesModel.EurostatModel import Eurostat
urlfetch.set_default_fetch_deadline(15) #set fetching time limit to 15 seconds,


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

    def get_indicators(self, sector_key, topic_key, default=None):
        try:
            indicators = self[sector_key][topic_key]['indicators']
            return indicators
        except KeyError:
            return default

    def get_units(self, sector_key, topic_key, default=None):
        try:
            units = self[sector_key][topic_key]['units']
            return units
        except KeyError:
            return default

    def __contains__(self, sector_key):
        return sector_key in self.keys() or str(sector_key) in self.keys()


def get_indicators(request, sector, topic):
    response = {
        'indicators': {},
        'units': {}
    }
    eurostat_dict = IndicatorsDict(Eurostat)
    response['indicators'] = eurostat_dict.get_indicators(sector, topic)
    response['units'] = eurostat_dict.get_units(sector, topic)
    return JsonResponse({
        'status': 'ok',
        'data': response
    })


def make_api_call(request):
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


