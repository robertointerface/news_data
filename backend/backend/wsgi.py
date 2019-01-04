"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os
import sys
sys.path.insert(0, '/Users/robertoalvarez/Desktop/virtualEnv/news_refactor/lib/python2.7/site-packages')

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.backend.settings")

import django.core.handlers.wsgi
django.setup()

application = django.core.handlers.wsgi.WSGIHandler()