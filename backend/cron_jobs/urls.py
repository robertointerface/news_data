from django.conf.urls import url
import views

urlpatterns = [
    url(r'^setnewscache', views.set_news_cache),
]