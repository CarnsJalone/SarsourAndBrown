from django import forms
from . models import Blog
import re 

class BlogForm(forms.ModelForm):

    title = forms.CharField(label="Title", required=True)
    title.widget.attrs.update({'class': 'form-control', 'name': 'title'})

    body = forms.CharField(widget=forms.Textarea, label="Body", required=True)
    body.widget.attrs.update({'class': 'form-control', 'name': 'body', 'rows': '10'})

    class Meta:
        model = Blog
        fields = ('title', 'body')


