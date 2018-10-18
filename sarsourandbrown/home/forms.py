from django import forms
from . models import Submitter

class ContactForm(forms.ModelForm):

    first_name = forms.CharField(label="First Name", required=True)
    first_name.widget.attrs.update({'class': 'form-control', 'name': 'first_name', 'placeholder': 'Please Enter Your First Name'})

    last_name = forms.CharField(label="Last Name", required=True)
    last_name.widget.attrs.update({'class': 'form-control', 'name': 'last_name', 'placeholder': 'Please Enter Your Last Name'})
    
    email = forms.EmailField(widget=forms.EmailInput, label="Email", required=True)
    email.widget.attrs.update({'class': 'form-control', 'name': 'email', 'placeholder': 'Please Enter Your Email'})
    
    body = forms.CharField(widget=forms.Textarea, label="Enter Inquiry Below", max_length="250", required=True)
    body.widget.attrs.update({'class': 'form-control', 'name':'email', 'placeholder':'Please Enter A Brief Description of the Inquiry', 'rows': '10'})

    class Meta:
        model = Submitter
        fields = ('first_name', 'last_name', 'email', 'body')

