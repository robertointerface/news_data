from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from accounts import views
else:
    from backend.accounts import views

urlpatterns = [
            url(r'^token-auth/', obtain_jwt_token),
            url(r'^current_user/$', views.current_user),
            url(r'^users/$', views.UserList.as_view()),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)