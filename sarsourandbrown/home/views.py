from django.shortcuts import render, redirect
from django.utils import timezone 
from django.shortcuts import HttpResponse
from django.urls import reverse
from django.core.mail import send_mail
from django.template.loader import get_template, render_to_string
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.decorators import login_required

from . models import Submitter
from .forms import ContactForm

def home(request):
    return render(request, 'home/home.html')


def about(request):
    return render(request, 'home/about.html')


def testimonials(request):
    return render(request, 'home/testimonials.html')


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

def display_inquiries(request):
    # if not request.user.is_authenticated:
    #     return redirect()
    
    query_results = Submitter.objects.all()

    context = {'query_results': query_results, 'n': range(10000)}

    return render(request, 'home/display_inquiries.html', context)

def privacy_policy(request):
    return render(request, 'home/privacy_policy.html')

def login(request):
    return render(request, 'home/authorization/login.html')

def profile(reqeust):
    return render(reqeust, 'home/profile.html')

