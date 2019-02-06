# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from .models import UserData


class UserDataAdmin(admin.ModelAdmin):
    list_display = ['hashed', 'savedBy']


admin.site.register(UserData, UserDataAdmin)

