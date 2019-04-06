# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

try:
    from backend.backend.settings import Migration
except ImportError:
    from backend.settings import Migration

if Migration:
    from backend.constants import Constants
else:
    from backend.backend.constants import Constants
    from google.appengine.api import mail


class User(AbstractUser):
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=30, blank=True)
    about_me = models.TextField(null=True)
    email_confirmed = models.BooleanField(default=False)
    activation_key = models.CharField(max_length=40, null=True)
    key_expires = models.DateTimeField(null=True)
    external_auth = models.BooleanField(default=False)
    following = models.ManyToManyField('User', through='Follow',
                                       related_name='followed', symmetrical=False)

    def __str__(self):
        class_name = type(self).__name__
        return '{class_name} {title}'.format(class_name=class_name, title=self.username)

    def __repr__(self):
        class_name = type(self).__name__
        return '{class_name} {title}'.format(class_name=class_name, title=self.username)
    # save, require email confirmation

    def save(self, *args, **kwargs):
        if not self.external_auth:
            if not self.email_confirmed:
                self.send_verification_email()
        super(User, self).save(*args, **kwargs)

    # save no email confirmation required

    # used in development to avoid email verification and fake users can be created
    # def save(self, *args, **kwargs):
    #
    #     self.email_confirmed = True
    #     super(User, self).save(*args, **kwargs)

    def send_verification_email(self):
        link = '{}/{}'.format(Constants['verify_Account'], self.activation_key)
        subject = 'Tablenew.com verification email.'
        email_body = """
        Dear {}:
            Thank you for joining tablenew.com, please click on the link below in order to verify you email account
            and you will be redirected in order to set up your password and user details.

            {}

            regards.
            Tablenew.com team

        """.format(self.username, link)
        mail.send_mail(
            sender='robertointerface@gmail.com',
            to=self.email,
            subject=subject,
            body=email_body
        )


class Follow(models.Model):
    follows = models.ForeignKey(User, related_name='user_rel_follows')
    followed = models.ForeignKey(User, related_name='user_rel_followed')
    time_stamp = models.DateTimeField(default=timezone.now)

    # def __str__(self):
    #     return self.time_stamp
    #
    # def __repr__(self):
    #     class_name = type(self).__name__
    #     return '{class_name}'.format(class_name=class_name)