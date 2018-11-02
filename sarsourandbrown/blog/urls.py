from django.urls import path

from . import views


urlpatterns = [
    path('new_blog/', views.new_blog, name="new_blog"),
    path('all_blogs/', views.all_blogs, name="all_blogs"),
]