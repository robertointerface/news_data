# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, DatabaseError
from django_mysql.models import JSONField
from django.utils import timezone

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from accounts.models import User
else:
    from backend.accounts.models import User


class UserData(models.Model):
    data = JSONField()
    hashed = models.FloatField(db_index=True, null=False, default=0, unique=False)
    saved_by = models.ForeignKey(User, related_name='user_saved_data')
    time_stamp = models.DateField(default=timezone.now)

    def __str__(self):
        class_name = type(self).__name__
        return '{}'.format(class_name)

    def save(self, *args, **kwargs):
        """
        Checks if the user has saved that exact data already. If not saved it will save it.
        """
        user = self.saved_by
        user_data = user.user_saved_data.filter(hashed=self.hashed).first()
        if user_data is None:
            super(UserData, self).save(*args, **kwargs)
        else:
            raise DatabaseError("data already saved")

    def _is_saved(self):
        user = self.saved_by
        user_data = user.user_saved_data.filter(hashed=self.hashed).first()
        return user_data
