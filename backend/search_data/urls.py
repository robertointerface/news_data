from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from search_data import views
else:
    from backend.search_data import views

urlpatterns = [
    url(r'^indicators/(?P<sector>[-\w]+)/(?P<topic>[-\w]+)/$', views.get_indicators),
    url(r'^makeapicall/$', views.MakeApiCall.as_view()),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)