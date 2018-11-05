# Django Imports
from django.shortcuts import render, redirect, reverse
from django.utils import timezone 
from django.shortcuts import HttpResponse
from django.urls import reverse
from django.core.mail import send_mail
from django.template.loader import get_template, render_to_string
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages 
from django.contrib.auth import logout
from django.views.generic import View

# Project Imports
from . models import Submitter
from . forms import ContactForm
from . utils import render_to_pdf

# Home Page
def home(request):
    return render(request, 'home/home.html')

# About Page
def about(request):
    return render(request, 'home/about.html')

# Testimonials Page
def testimonials(request):
    return render(request, 'home/testimonials.html')

# Contact Page
def contact(request):
    first_name = None
    last_name = None
    email = None
    body = None

    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            phone_number = form.cleaned_data['phone_number']
            body = form.cleaned_data['body']

            form.save()

            field_args = {'first_name': first_name, 'last_name': last_name, 'email': email, 'phone_number': phone_number, 'body': body, 'form': form}

            inquiry_email_html = render_to_string('email/inquiry_email.html', field_args)
            inquiry_email_text = render_to_string('email/inquiry_email.txt', field_args)
            sarsour_and_brown_automated_html = render_to_string('email/sarsour_and_brown_automated.html', field_args)
            sarsour_and_brown_automated_text = render_to_string('email/sarsour_and_brown_automated.txt', field_args)
            
            # Email to Sarsour And Brown about the inquiry
            send_mail( 
                'New Automated Inquiry',
                sarsour_and_brown_automated_text,
                email, 
                ['SarsourAndBrown@gmail.com'],
                html_message=sarsour_and_brown_automated_html,
                fail_silently=False
            )

            # Email to the inquirer about the next steps
            send_mail(
                'Hello from Sarsour And Brown',
                inquiry_email_text, 
                'SarsourAndBrown@gmail.com',
                [email],
                html_message=inquiry_email_html,
                fail_silently=False
            )

            # TODO - I want to send a rendered HTML page into the email, to look more professional. 
            
            return render(request, 'home/contact_feedback.html', field_args)

        else: 
            form = ContactForm()
            return render(request, 'home/contact.html', {'form': form})

    else:
        form = ContactForm()
        return render(request, 'home/contact.html', {'form': form})

# Privacy Policy Page
def privacy_policy(request):
    return render(request, 'home/privacy_policy.html')


# Login Page
def login(request):
    if not request.user.is_authenticated:
        if request == 'POST':
            form = AuthenticationForm(request.POST)
            if form.is_valid():
                field_args = {'user' : user, 'first_name': user.first_name, 'last_name': user.last_name}
                return render(request, 'home/profile.html', field_args)
        
        else:
            form = AuthenticationForm()
            return render(request, 'home/authorization/login.html', {'form': form})
    else:
        return redirect('profile-page')

# Logout Page
def logout_view(request):
    logout(request)
    return redirect('login')

# Admin Page
def profile(request):
    if not request.user.is_authenticated:
        return redirect('login')
    else:
        all_entries = Submitter.objects.all
        context = {'user': request.user, 'first_name': request.user.first_name, 'last_name': request.user.last_name, 'all_entries': all_entries}
        return render(request, 'home/profile.html', context)

# Admin Page - CRUD - Delete
def delete_entry(request, entry_id):
    if not request.user.is_authenticated:
        return redirect('login')
    else:
        entry = Submitter.objects.get(pk=entry_id)
        entry.delete()
        messages.success(request, ('Entry Has Been Deleted'))
        return redirect('profile-page')

# Admin Page - CRUD - Update
def complete_entry(request, entry_id):
    if not request.user.is_authenticated:
        return redirect('login')
    else:
        entry = Submitter.objects.get(pk=entry_id)
        entry.completed = True
        entry.save()
        messages.success(request, 'Entry Has Been Marked As Complete')
        return redirect('profile-page')

# Admin Page - CRUD - Update
def uncomplete_entry(request, entry_id):
    if not request.user.is_authenticated:
        return redirect('login')
    else:
        entry = Submitter.objects.get(pk=entry_id)
        entry.completed = False
        entry.save()
        messages.success(request, 'Entry Has Been Marked As Incomplete')
        return redirect('profile-page')

# Admin Page - Generate PDF
def generate_pdf(request, *args, **kwargs):
    all_entries = Submitter.objects.all
    data = {'all_entries': all_entries}
    pdf = render_to_pdf('pdf/pdf.html', data)
    return HttpResponse(pdf, content_type='application/pdf')
