from django.shortcuts import render

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
    return render(request, 'home/contact.html')