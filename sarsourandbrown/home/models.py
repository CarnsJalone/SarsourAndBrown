from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return 'Title: {}, Content: {}. Author: {}'.format(self.title, self.content, self.author)

class Submitter(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    body = models.CharField(max_length=250)
    date_submitted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return "Name: {}, Email: {}, Inquiry: {}, Posted on: {}".format(self.name, self.email, self.body, self.date_submitted)

# Create a review class 
# Stores reviews by people
