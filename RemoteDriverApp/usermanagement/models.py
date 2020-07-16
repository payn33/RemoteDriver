from __future__ import unicode_literals
from django.db import models
from django.core.validators import validate_email


# Create your models here.


class Email(models.Model):
    full_name = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=50, blank=False, unique=True, validators=[validate_email])
    upload_time = models.DateTimeField(auto_now_add=True)

    def _str_(self):
         return self.full_name