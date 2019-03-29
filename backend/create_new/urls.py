from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
import views

urlpatterns = [url(r'^publishlongnew/$', views.PublishLongNew.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)