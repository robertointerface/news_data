from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

import views

urlpatterns = [
    url(r'^indicators', views.GetIndicators.as_view()),
    url(r'^makeapicall/$', views.MakeApiCall.as_view()),
    url(r'^savedata/$', views.SaveData.as_view())

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)