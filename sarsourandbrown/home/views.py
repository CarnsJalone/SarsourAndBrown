from django.shortcuts import render, redirect
from . forms import ContactForm
from django.shortcuts import HttpResponse
from django.urls import reverse

url_titles = {
        'name': 'Sarsour And Brown',
        'home_page': 'Home',
        'about_page': 'About',
    }

def home(request):
    context = {'pages': url_titles}
    return render(request, 'home/home.html')

def about(request):
    context = {'pages': url_titles}
    return render(request, 'home/about.html')

def testimonials(request):
    return render(request, 'home/testimonials.html')
	

def contact(request):
	name = None
	email = None 
	body = None 

	if request.method == 'POST':
		form = ContactForm(request.POST)

		if form.is_valid():
			name = form.cleaned_data['name']
			email = form.cleaned_data['email']
			body = form.cleaned_data['body']

			print(name)

			return render(request, 'home/contact_feedback.html')
	
	else: 
		form = ContactForm()

		return render(request, 'home/contact.html', {'form': form})

def contact_feedback(request):
	return render(request, 'home/contact_feedback.html')