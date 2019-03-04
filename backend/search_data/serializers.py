"""
    search_data serializers - rest_framework serializers for search_data.models

    Members:
        # UserDataSerializers - A class inheriting from serializers.ModelSerializer and used to serialize
                                search_data.models UserData

"""

from rest_framework import serializers
from .models import UserData
from rest_framework.serializers import ValidationError
from django.shortcuts import get_object_or_404
try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from accounts.models import User
else:
    from backend.accounts.models import User


class UserDataSerializers(serializers.ModelSerializer):
    """UserData serializer

        Main methods:
            create - saves validated data into table UserData
            validate_hashed - Validate if the data that wants to be saved was already saved
    """
    class Meta:
        model = UserData
        fields = ('data', 'hashed', 'savedBy')

    def create(self, validated_data):
        return UserData.objects.create(**validated_data)

    def validate_hashed(self, value):
        """
            Validates if data has already been saved
        @param:
            value - hashed value of the API request.
        @return:
            On success - returned hash value so it can be used.
            On failure - raise ValidationError with message.
        """
        user_id = self.initial_data['savedBy']
        user = get_object_or_404(User, id=user_id)
        user_data = user.user_saved_data.filter(hashed=value).first()
        if user_data is not None:
            raise ValidationError('data already saved')
        return value

