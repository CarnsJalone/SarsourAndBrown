from django.shortcuts import render
from . forms import ContactForm

url_titles = {
        'name': 'Sarsour And Brown',
        'home_page': 'Home',
        'about_page': 'About',
    }

def home(request):
    context = {'pages': url_titles}
    return render(request, 'home/home.html', context)

def about(request):
    context = {'pages': url_titles}
    return render(request, 'home/about.html', context)

def testimonials(request):
    return render(request, 'home/testimonials.html')

def contact(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_date['name']
            email = form.cleaned_data['email']
            text_area = form.cleaned_data['body']
        
        else: 
            form = ContactForm()


    return render(request, 'home/contact.html'),