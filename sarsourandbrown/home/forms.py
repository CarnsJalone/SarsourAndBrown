from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="name")
    email = forms.EmailField(label="email")
    body = forms.CharField(widget=forms.Textarea)