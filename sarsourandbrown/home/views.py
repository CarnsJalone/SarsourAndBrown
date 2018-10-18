from django.shortcuts import render, redirect
from django.utils import timezone 
from django.shortcuts import HttpResponse
from django.urls import reverse
from . models import Submitter
from .forms import ContactForm

url_titles = {
    'name': 'Sarsour And Brown',
    'home_page': 'Home',
    'about_page': 'About',
}


def home(request):
    return render(request, 'home/home.html')


def about(request):
    return render(request, 'home/about.html')


def testimonials(request):
    return render(request, 'home/testimonials.html')


def contact(request):
    name = None
    email = None
    body = None

    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            body = form.cleaned_data['body']

            form.save()
            
            field_args = {'name': name, 'email': email, 'body': body}
            return render(request, 'home/contact_feedback.html', field_args)
            # TODO - Need to figure out how to pull this data over to contact_feedback

    else:
        form = ContactForm()
        return render(request, 'home/contact.html', {'form': form})

def display_inquiries(request):
    query_results = Submitter.objects.all()

    context = {'query_results': query_results, 'n': range(10000)}

    return render(request, 'home/display_inquiries.html', context)
