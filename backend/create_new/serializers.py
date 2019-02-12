from rest_framework import serializers
from .models import New

class NewSerializer(serializers.ModelSerializer):
    created_by = serializers.SlugRelatedField(many=False, read_only=True, slug_field='username')
    class Meta:
        model = New
        fields = '__all__'

    def create(self, validated_data):
        return New.objects.create(**validated_data)

