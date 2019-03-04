# -*- coding: utf-8 -*-

"""
    search_data views - classes used to handle API calls to search_data django app, urls specified
    in search_data.urls

    Members:
        # IndicatorDict - A class used to get data from dicts at search_data.DataBasesModel
        # GetIndicators - A class (inheriting from APIView) used to handle the api calls to
        '/search/indicators/'
        # MakeApiCall - A class (inheriting from APIView) used to handle the api calls to
         '/search/makeapicall/'
        # SaveData - A class (inheriting from APIView) used to handle the api calls to
        '/search/savedata/'

"""
from __future__ import unicode_literals
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.serializers import ValidationError
from rest_framework.response import Response
import functools
from google.appengine.api import urlfetch
from django.shortcuts import render
from django.db import DatabaseError
from django.http import JsonResponse, HttpResponse
import json
from backend.search_data.DataBasesModel.EurostatModel import Eurostat
from backend.search_data.DataBasesModel.OECDModel import OECD
from backend.search_data.DataBasesModel.UNESCOModel import UNESCO
from backend.search_data.DataBasesModel.APIKeys import api_keys
from backend.search_data.serializers import UserDataSerializers
# set fetching time limit to 15 seconds
urlfetch.set_default_fetch_deadline(15)

# CHANGED IT TO INHERIT FROM collections.UserDict CHAPTER 12 FLUENT PYTHON, BE CAREFUL AS TWICK
# MIGHT BE NEEDED, MAYBE IT CANOT BE IMPLEMENTED, LOOK AT PAGE 364 OF FLUENT PYTHON


class IndicatorsDict(dict):
    """Inheritance from 'dict' to get data from dictionaries in DataBasesModel, by using dict we
    ensure fast querying that dictionaries possess due to hashed keys.

        Main methods:
            missing - override dict missing method in case is trying to get object with a
                    non-string key.
            get -
            get_indicators - get indicators by providing sector_key, version & topic_key
            get_units - get units by providing sector_key, version & topic_key
     """
    def __missing__(self, key):
        if isinstance(key, str):
            raise KeyError(key)
        return self[str(key)]

    def get(self, key, default=None):
        try:
            topics = self[key]
            return topics
            # indicators = {sector: topics for sector, topics in self if sector == sector_key}
        except KeyError:
            return default

    def get_indicators(self, sector_key, topic_key, version, default=None):
        """get 'indicators' from  the corresponding backend.search_data.DataBasesModel dictionaries

        @param:
            sector_key - str, sector key in dictionary
            topic_key - str, topic key in dictionary
            version - str, version key in dictionary

        @return:
            On success - returned dictionary of indicators.
            On failure - returned default (None)
        """
        try:
            indicators = self[sector_key][topic_key][version]['indicators']
            # convert to unicode. this might not be required in python3 as str are unicodes and not bytes as in python2
            indicators = self.unicode_converter(indicators)
            return indicators
        except KeyError:
            return default

    def unicode_converter(self, dictionary):
        return {k.decode('utf8'): v.decode('utf8') for k, v in dictionary.items()}

    def get_units(self, sector_key, topic_key, version, default=None):
        try:
            units = self[sector_key][topic_key][version]['units']
            # convert to unicode. this might not be required in python3 as str are unicodes and not bytes as in python2
            units = {k.decode('utf8'): v.decode('utf8') for k, v in units.items()}
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
            indicator_dict = self._get_api(third_party)
            response['indicators'] = indicator_dict.get_indicators(sector, topic, version)
            response['units'] = indicator_dict.get_units(sector, topic, version)
        except (KeyError, ValueError) as e:
            return Response(None, status=500, content_type=json)
        else:
            if (response['indicators'] and response['units']) is not None:
                return Response(response, status=200, content_type=json)
            else:
                return Response(None, status=500, content_type=json)

    def _get_api(self, third_party):
        if third_party == 'EU':
            return IndicatorsDict(Eurostat)
        elif third_party == 'OECD':
            return IndicatorsDict(OECD)
        elif third_party == 'UNESCO':
            return IndicatorsDict(UNESCO)
        else:
            raise KeyError


class MakeApiCall(APIView):
    """
    Make Third Party API calls (fetch) after the user has selected all required options.

    """
    def __init__(self):
        APIView.__init__(self)
        self._api = ''
        self._result = {}

    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        request_data = self.request.data
        api_url = request_data['APIUrl']

        # for test purpose, faulty api urls
        euro_faulty_api = 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/nama_10_a10?nace_r2=K&unit=PC_GDP&precision=1&time=1996&time=1997&geo=ES&geo=FR&na_item=BG&'
        OECD_faulty_api = 'https://stats.oecd.org/SDMX-JSON/data/PDB_GR/USA+KOR.T_GDOP_V.2010Y/all?startTime=1999&endTime=2001&'

        self._api = request_data['API']
        api_key = self._get_api_keys()
        try:
            if api_key is not None:
                # if api_key required add to api_url
                api_url = '{api_url}{key_name}={key}'.format(api_url=api_url, key_name=api_key[1], key=api_key[2])

            headers = {'Content-Type': 'application/json'}
            self._result = urlfetch.fetch(
                url=api_url,
                method=urlfetch.GET,
                headers=headers)

            self.verify_result()
            # Verify if result fetched was successfull
        except urlfetch.Error:
            return Response(None, status=400, content_type=json)
        else:
            return Response(json.dumps(self._result), status=200, content_type=json)

    def _get_api_keys(self):
        for api_key in api_keys:
            if api_key[0] == self._api:
                return api_key
        return None

    def verify_result(self):
        if self._api == 'EU':
            self.verify_EU()
        elif self._api == 'OECD':
            self.verify_OECD()
        elif self._api == 'UNESCO':
            self.verify_UNESCO()

    def verify_EU(self):
        self._result = json.loads(self._result.content)
        try:
            if self._result['error']:
                raise urlfetch.Error
        except KeyError:
            pass

    def verify_OECD(self):
        try:
            self._result = json.loads(self._result.content)
        except ValueError:
            raise urlfetch.Error

    def verify_UNESCO(self):
        self._result = json.loads(self._result.content)
        try:
            if self._result['errors']:
                raise urlfetch.Error
        except KeyError:
            pass


class SaveData(APIView):
    """
    Saves third party data (queried by the user) into table UserData.

    Main methods:
        post - saves the requested data.

    the API url that was used to save the data is hashed, the purpose of this is to avoid duplicate
    saving of the same data. If the data that is going to be saved was already saved, it will be
    found and not saved.
    """
    permission_classes = (IsAuthenticated, )

    def __repr__(self):
        class_name = type(self).__name__
        return'{}'.format(class_name)

    def post(self, request, format=None):
        """Handle Post request

        @params
            request - http.request object

        @returns
            On success - rest_framework.response with 'status' 200
            On failure -  rest_framework.response with 'status' 400
        """
        try:
            request_data = self.request.data
            data_to_save = request_data['DataToSave']
            api_url = request_data['APIUrl']
            # the API url request is hash and saved, hashed values can not be repeated per user
            api_hash = hash(api_url)
            user = request.user
            serializer = UserDataSerializers(data={'data': data_to_save,
                                                   'hashed': api_hash,
                                                   'savedBy': user.id})
            if serializer.is_valid(raise_exception=True):
                serializer.create(serializer.validated_data)
        except DatabaseError or ValidationError:
            return Response(None, status=400, content_type=json)
        else:
            return Response(None, status=200, content_type=json)
