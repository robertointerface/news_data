from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static


try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from main import views
else:
    from backend.main import views

urlpatterns = [
            url(r'^$', views.main, name="main_site"),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)