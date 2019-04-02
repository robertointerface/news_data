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
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

urlpatterns = [
    url(r'^admin', include(admin.site.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if Migration:
    urlpatterns.append(url(r'^', include('main.urls', namespace='main')))
    urlpatterns.append(url(r'^accounts/', include('accounts.urls', namespace='accounts')))

else:
    urlpatterns.append(url(r'^accounts/', include('backend.accounts.urls', namespace='accounts'))),
    urlpatterns.append(url(r'^search/', include('backend.search_data.urls', namespace='Current_search'))),
    urlpatterns.append(url(r'^downloaddata/', include('backend.download_data.urls', namespace='download_data'))),
    urlpatterns.append(url(r'^createnew/', include('backend.create_new.urls', namespace='create_new'))),
    urlpatterns.append(url(r'^display/', include('backend.display.urls', namespace='display_news'))),
    urlpatterns.append(url(r'^profile/', include('backend.user_profile.urls', namespace='user_profile'))),
    urlpatterns.append(url(r'^cronjobs/', include('backend.cron_jobs.urls', namespace='cron_jobs'))),
    urlpatterns.append(url(r'^$', include('backend.main.urls', namespace='main'))),
    urlpatterns.append(url(r'^(?:.*)/?$', include('backend.main.urls', namespace='main')))