# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from google.appengine.api import memcache
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
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


def set_news_cache(request):
    try:
        news_count = New.objects.count()
        news_pagination = news_count/2
        for page in range(0, (news_pagination - 1), 1):
            news = NewSerializer(New.objects.all()[page * 2:(page * 2) + 2], many=True)
            content = JSONRenderer().render(news.data)
            cache_key = 'news-cache-{page}'.format(page=page)
            memcache.add(key=cache_key, value=content, time=3600)
        return HttpResponse(200)
    except KeyError:
        return HttpResponse(404)

