from django import forms
from . models import Blog
import re 

class BlogForm(forms.ModelForm):

    title = forms.CharField(label="title", required=True)
    title.widget.attrs.update({'class': 'form-control', 'name': 'title'})

    body = forms.CharField(widget=forms.TextInput, label="body", required=True)
    body.widget.attrs.update({'class': 'form-control', 'name': 'body'})

    class Meta:
        model = Blog
        fields = ('title', 'body')


