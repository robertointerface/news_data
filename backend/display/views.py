# -*- coding: utf-8 -*-
"""
    display views - classes used to handle API calls to dsiplay django app, urls specified
    in display.urls

    Members:
        # GetNewList - Class used to get all rows on table 'New' in a paginated way.
        # GetNewsCount - Class used to query 'New.objects.count()'
        # GetNew - Class used to get specific row on 'New' table, query by id
        # GetUserPublishedNews - Class used to get news created by specific user by providing
        username
"""
from __future__ import unicode_literals
import json
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants
    from backend.create_new.models import New
    from backend.create_new.serializers import NewSerializer
    from backend.accounts.models import User
    from backend.accounts.serializers import UserInfoSerializer


class GetNewList(APIView):
    """Get rows from table 'New' in a paginated way. response to request 'display/newslist?page=x',
        no permission required.
        Main methods:
        # get - override get method on 'APIView' class.

    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        """
        response to GET request

        @param
            request - http.request object, as is get method there is no body on http object.
        @return
            On success - rest_framework.response with status 200 and list of news.
            On failure - rest_framework.response with status 400
        """
        try:
            params = request.query_params
            # is required to sub 1 as data is saved starting with 0 and not 1
            page = int(params['page']) - 1
            # load in steps of 2, if want to load in steps of 3 just change *2 for *3 and so on
            news = NewSerializer(New.objects.all()[page*2:(page*2)+2], many=True)
            content = JSONRenderer().render(news.data)
            return Response(content, status=200, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)


class GetNewsCount(APIView):
    """
    Find number of news/items saved on table 'New' (get row count on table 'New').

    Main methods:
        # get - override get method on 'APIView' class.

    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        """
        response to request 'display/getnewscount', returns number of rows on table 'New'

        @params
            None
        @returns
            On success - dict with 'newsCount': New.objects.count()
            On failure - dict with 'newsCount': 0
        """
        try:
            news = dict({
                'newsCount': New.objects.count()
            })
        except DatabaseError:
            news = dict({
                'newsCount': 0
            })
        else:
            return Response(news, status=200, content_type=json)


class GetNew(APIView):
    """
    Override APIView class, request-response to call '/display/getnew'
    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        """
         response to request '/display/getnew', query an object form 'create_new.New' table and
          returned it serialized

        @params
            request - http.request GET object with param id='new id to be queried'

        @return
            On success - rest_framework.response with status 200 & content with serialized new
            On fail - rest_framework.response with status 400
         """
        try:
            params = request.query_params
            new_id = params['id']
            new = NewSerializer(New.objects.filter(id=new_id).first(), many=False)
            content = JSONRenderer().render(new.data)
            return Response(content, status=200, content_type=json)
        except DatabaseError:
            return Response(None, status=400, content_type=json)
        except ValueError:
            return Response(None, status=400, content_type=json)


class GetUserPublishedNews(APIView):
    """
    Provided a username, return the news the user has created. No authentication required.
    Main methods:
        # get - override get method on 'APIView' class.
    """
    permission_classes = (AllowAny,)

    def get(self, request, username, format=None):
        """
        Get request
        @param
            request - http.request object with query param '?page'
            username - username whose published news should be queried.
        @return
            On success - Response with status 200 and published news in JSON format
            On failure - Response with status 400
        """
        try:
            params = request.query_params
            page = int(params['page']) - 1
            user = User.objects.filter(username=username).first()
            news = NewSerializer(user.user_created_new.all()[page * 2:(page * 2) + 2], many=True)
            content = JSONRenderer().render(news.data)
            return Response(content, status=200, content_type=json)
        except (DatabaseError, AttributeError):
            return Response(None, status=400, content_type=json)
        except KeyError:
            return Response(None, status=400, content_type=json)


class GetUserSubscriptionNews(APIView):
    """
    API call to get News from users that user A is following.

    Main methods:
        get
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        try:
            params = request.query_params
            page = int(params['page']) - 1
            user = request.user
            user_follows = user.following.all()
            news = NewSerializer(New.objects.filter(created_by__in=user_follows).
                                 all()[page * 2:(page * 2) + 2], many=True)
            content = JSONRenderer().render(news.data)
            response = dict({
                'newsCount': New.objects.filter(created_by__in=user_follows).count(),
                'news': content
            })
            return Response(response, status=200, content_type=json)
        except (DatabaseError, AttributeError):
            return Response(None, status=400, content_type=json)
        except KeyError:
            return Response(None, status=400, content_type=json)
