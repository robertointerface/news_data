# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import New


class NewAdmin(admin.ModelAdmin):
    list_display = ['id', 'new_title', 'created_by']


admin.site.register(New, NewAdmin)