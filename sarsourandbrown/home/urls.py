from django.contrib.auth.views import LoginView
from django.contrib.auth.views import LogoutView
from django.urls import path
from . import views
# from django.contrib.auth import views as auth_views
# from django.contrib.auth.views import TemplateView

from django.contrib.auth import login

urlpatterns = [
    path('', views.home, name='home-page'),
    path('about/', views.about, name='about-page'),
    path('testimonials/', views.testimonials, name='testimonials-page'),
    path('contact/', views.contact, name='contact-page'),
    path('contact/contact_feedback/', views.contact, name='contact-feedback-page'),
    path('display_inquiries/', views.display_inquiries, name='display_inquiries'),
    path('privacy_policy/', views.privacy_policy, name='privacy_policy'),
    path('account/login/', LoginView.as_view(template_name='authorization/login.html'), name="login"),
    path('account/profile/', views.profile, name="profile-page"),
    ]
