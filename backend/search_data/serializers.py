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

    class Meta:
        model = UserData
        fields = ('data', 'hashed', 'savedBy')

    def create(self, validated_data):
        return UserData.objects.create(**validated_data)

    def validate_hashed(self, value):
        user_id = self.initial_data['savedBy']
        user = get_object_or_404(User, id=user_id)
        user_data = user.user_saved_data.filter(hashed=value).first()
        if user_data is not None:
            raise ValidationError('data already saved')
        return value

