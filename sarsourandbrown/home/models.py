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

class Review(models.Model):
    # TODO - Here I want to create a class that allows a User instance
    # to fill out a form that will either leave a review or send an 
    # email. I haven't decided which I want yet. 
    pass