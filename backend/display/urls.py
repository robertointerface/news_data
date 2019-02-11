from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static

import views

urlpatterns = [
        url(r'^newslist/$', views.GetNewList.as_view()),
        url(r'^getnew/$', views.GetNew.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)