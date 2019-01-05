# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


class User(AbstractUser):
    location = models.CharField(max_length=30, blank=True)
    about_me = models.TextField(null=True)
    email_confirmed = models.BooleanField(default=False)
    activation_key = models.CharField(max_length=40, null=True)
    key_expires = models.DateTimeField(null=True)

    def __str__(self):
        return self.username
    #
    # def clean(self, *args, **kwargs):
    #
    # def send_email(self):


