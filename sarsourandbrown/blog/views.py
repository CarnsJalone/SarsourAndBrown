from django.shortcuts import render, redirect, reverse

from . models import Blog
from . blog import BlogForm

def new_blog(request):
    title = None
    body = None 

    form = BlogForm()

    if request.method == 'POST':
        form = BlogForm(request.POST)

        if form.is_valid():
            title = form.cleaned_data['title']
            body = form.cleaned_data['body']

            form.save()

            form_vars = {'title': title, 'body': body}

            return render(request, 'blog/new_blog.html', form_vars)

        else:
            form = BlogForm()
            return render(request, 'blog/new_blog.html', {'form': form})

    else:
        form = BlogForm()
        return render(request, 'blog/new_blog.html', {'form': form})

def view_blogs(request):
    all_blogs = Blog.objects.all
    blog_vars = {'all_blogs': all_blogs}
    return render(request, 'blog/view_blogs.html', blog_vars)
