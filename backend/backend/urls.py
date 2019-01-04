"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
try:
    from backend.backend import Migration
except:
    from backend.backend.settings import Migration

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if Migration:
    urlpatterns.append(url(r'^', include('main.urls', namespace='main')))
    urlpatterns.append(url(r'^accounts/', include('accounts.urls', namespace='accounts')))

else:
    urlpatterns.append(url(r'^accounts/', include('backend.accounts.urls', namespace='accounts'))),
    urlpatterns.append(url(r'^search/', include('backend.search_data.urls', namespace='search_data'))),
    urlpatterns.append(url(r'^$', include('backend.main.urls', namespace='main'))),
    urlpatterns.append(url(r'^(?:.*)/?$', include('backend.main.urls', namespace='main')))