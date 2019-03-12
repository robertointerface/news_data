from rest_framework import serializers
from rest_framework.serializers import ValidationError
from django.shortcuts import get_object_or_404
try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from search_data.models import UserData
else:
    from backend.search_data.models import UserData


class GetUserDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = ('data',)

