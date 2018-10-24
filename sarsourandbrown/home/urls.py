from django.urls import path
from . import views
# from django.contrib.auth.views import login

urlpatterns = [
    path('', views.home, name='home-page'),
    path('about/', views.about, name='about-page'),
    path('testimonials/', views.testimonials, name='testimonials-page'),
    path('contact/', views.contact, name='contact-page'),
    path('contact/contact_feedback/', views.contact, name='contact-feedback-page'),
    path('display_inquiries/', views.display_inquiries, name='display_inquiries'),
    path('privacy_policy/', views.privacy_policy, name='privacy_policy'),
    # parth('login/', login, {'template_name': 'accounts/login.html'})
]
