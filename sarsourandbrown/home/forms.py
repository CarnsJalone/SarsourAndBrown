from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Name", required=True)
    name.widget.attrs.update({'class': 'form-control', 'name': 'name', 'placeholder': 'Please Enter Your Name'})
    email = forms.EmailField(widget=forms.EmailInput, label="Email", required=True)
    email.widget.attrs.update({'class': 'form-control', 'name': 'email', 'placeholder': 'Please Enter Your Email'})
    body = forms.CharField(widget=forms.Textarea, label="Enter Inquiry Below", max_length="250", required=True)
    body.widget.attrs.update({'class': 'form-control', 'name':'email', 'placeholder':'Please Enter A Brief Description of the Inquiry', 'rows': '10'})

    def __init__(self, *args, **kwargs):
        pass
    
    def __str__(self):
        return '{} posted by {} at {}'.format(self.body, self.name, self.email)