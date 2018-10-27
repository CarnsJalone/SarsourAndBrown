from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

import datetime

class Submitter(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default="Doe")
    email = models.EmailField(max_length=100)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Format: 9999999999")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True, default="0000000000")
    body = models.CharField(max_length=250)
    date_submitted = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)

    def __str__(self):
        formatted_date_submitted = datetime.datetime.strftime(self.date_submitted, "%m/%d/%Y at %I:%M %p" )
        return "{} {} from {} at {}".format(self.first_name, self.last_name, self.email, formatted_date_submitted)

