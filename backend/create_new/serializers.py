from rest_framework import serializers
from .models import New

class NewSerializer(serializers.ModelSerializer):

    class Meta:
        model = New
        fields = '__all__'

    def create(self, validated_data):
        return New.objects.create(**validated_data)

