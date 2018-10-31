from django.db import models
from django.utils import timezone
from datetime import datetime

class Blog(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=1000)
    date_written = models.DateTimeField(default=timezone.now)
    email_sent = models.BooleanField(default=False)

    def __str__(self):
        return self.title
