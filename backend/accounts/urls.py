from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
import views

urlpatterns = [
            url(r'^token-auth/', obtain_jwt_token),
            url(r'^token-refresh/', refresh_jwt_token),
            url(r'^current_user/$', views.current_user),
            url(r'^users/$', views.UserList.as_view()),
            url(r'^signup/$', views.sign_up),
            url(r'^verifyusertoken/(?P<token>[-\w]+)/', views.verify_token),
            url(r'^edituserfirsttime/', views.edit_user_first_time),
            url(r'^googleverify', views.google_signin),
            url(r'^userpublicinfo$', views.UserPublicInfo.as_view()),
            url(r'^userprivateinfo$', views.UserPrivateInfo.as_view()),
            url(r'^follow$', views.SetUserFollow.as_view()),
            url(r'^unfollow$', views.SetUserUnFollow.as_view()),
            url(r'^isfollowing$', views.IsFollowing.as_view()),
            url(r'^edituser$', views.EditUser.as_view()),
            url(r'^changepassword', views.ChangePassword.as_view()),
            url(r'^APIresetpassword', views.ResetPassword.as_view())

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)