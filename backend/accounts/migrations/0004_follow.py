# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-03-06 15:18
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_user_external_auth'),
    ]

    operations = [
        migrations.CreateModel(
            name='Follow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('followed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_rel_followed', to=settings.AUTH_USER_MODEL)),
                ('follows', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_rel_follows', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
