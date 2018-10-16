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

def about_us(request):
    context = {'pages': url_titles}
    return render(request, 'home/about-us.html', context)
