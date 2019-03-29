"""
    create_new serializers - Serializers class used for the creating, retrieval, update and  delete of
    objects on tables in 'create_new.models'
"""

from rest_framework import serializers
from .models import New

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from accounts.models import User
else:
    from backend.accounts.models import User


class NewSerializer(serializers.ModelSerializer):
    """
    'New model serializer'
    """
    created_by = serializers.SlugRelatedField(many=False, queryset=User.objects.all(), slug_field='username')

    class Meta:
        model = New
        fields = '__all__'

    def create(self, validated_data):
        return New.objects.create(**validated_data)