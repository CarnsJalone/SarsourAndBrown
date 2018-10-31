from django.urls import path

from . import views


urlpatterns = [
    path('new_blog/', views.new_blog, name="blog-new_blog"),
    path('view_blogs/', views.view_blogs, name="blog-view_blogs"),
]