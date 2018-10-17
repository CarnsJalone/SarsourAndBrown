from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home-page'),
    path('about/', views.about, name='about-page'),
    path('testimonials/', views.testimonials, name='testimonials-page'),
    path('contact/', views.contact, name='contact-page'),
    path('contact_feedback/', views.contact_feedback, name='contact-feedback-page'),
]
