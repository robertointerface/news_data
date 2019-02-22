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
    created_by = serializers.SlugRelatedField(many=False, queryset=User.objects.all(), slug_field='username')
    class Meta:
        model = New
        fields = '__all__'

    def create(self, validated_data):
        return New.objects.create(**validated_data)