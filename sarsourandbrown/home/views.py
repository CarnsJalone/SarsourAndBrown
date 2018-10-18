from django.shortcuts import render, redirect
from django.utils import timezone 
from django.shortcuts import HttpResponse
from django.urls import reverse
from django.core.mail import send_mail

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
            body = form.cleaned_data['body']

            form.save()
            
            # Email to Sarsour And Brown about the inquiry
            send_mail( 
                'Inquiry from {} {} at {}'.format(first_name, last_name, email),
                body,
                email, 
                ['SarsourAndBrown@gmail.com'],
                fail_silently=False)

            # Email to the inquirer about the next steps
            send_mail(
                'Hello from Sarsour And Brown',
                'Hey {}. Thanks for reaching out to us. Your inquiry has been forwarded to a member of the team. Please look out for our contact regarding the next steps. We are excited to work together!'.format(first_name), 
                'SarsourAndBrown@gmail.com',
                [email],
                fail_silently=False
            )
            
            field_args = {'first_name': first_name, 'last_name': last_name, 'email': email, 'body': body}
            return render(request, 'home/contact_feedback.html', field_args)
            # TODO - Need to figure out how to pull this data over to contact_feedback

    else:
        form = ContactForm()
        return render(request, 'home/contact.html', {'form': form})

def display_inquiries(request):
    query_results = Submitter.objects.all()

    context = {'query_results': query_results, 'n': range(10000)}

    return render(request, 'home/display_inquiries.html', context)

