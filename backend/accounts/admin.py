# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import User, Follow


class UserAdmin(admin.ModelAdmin):
    list_display=['username', 'email']
    # def save_model(self, request, obj, form, change):
    #     obj.set_password(obj.password)
    #
    #     return super(UserAdmin, self).save_model(request, obj, form, change)

    def save_model(self, request, obj, form, change):
        obj.set_password(obj.password)
        return super(UserAdmin, self).save_model(request, obj, form, change)


class FollowAdmin(admin.ModelAdmin):
    list_display = ['follows', 'followed']


admin.site.register(User, UserAdmin)
admin.site.register(Follow, FollowAdmin)
