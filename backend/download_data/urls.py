from django.conf.urls import url
import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^excel/$', views.ConvertToExcel.as_view())
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)