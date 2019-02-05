# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django_mysql.models import JSONField

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from accounts.models import User
else:
    from backend.accounts.models import User


class New(models.Model):
    new_title = models.CharField(max_length=80, null=False)
    bullet_point1 = models.CharField(max_length=100, null=True)
    bullet_point2 = models.CharField(max_length=100, null=True)
    bullet_point3 = models.CharField(max_length=100, null=True)
    content = models.TextField(max_length=605, null=False)
    references = JSONField()
    time_stamp = models.DateField(default=timezone.now)
    created_by = models.ForeignKey(User, related_name='user_created_new')

    def __str__(self):
        class_name = type(self).__name__
        return '{class_name} {title}'.format(class_name=class_name, title=self.new_title)