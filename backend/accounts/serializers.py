from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import User, Follow
from django.shortcuts import get_object_or_404
from rest_framework.serializers import ValidationError
from django.db.models import ObjectDoesNotExist
from django.db import DatabaseError

try:
    from backend.backend.settings import Migration
except:
    from backend.settings import Migration

if Migration:
    from search_data.serializers import UserDataSerializers
else:
    from backend.search_data.serializers import UserDataSerializers
    from backend.create_new.models import New


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'location', 'about_me')


class UserInfoSerializer(serializers.ModelSerializer):
    """serializer for user public information

    """
    user_created_new = serializers.SerializerMethodField()
    user_rel_followed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('username', 'about_me', 'location', 'user_created_new', 'user_rel_followed')

    def get_user_created_new(self, obj):
        """Get only the count"""
        return obj.user_created_new.count()

    def get_user_rel_followed(self, obj):
        """Get the count of users that are following you"""
        return obj.user_rel_followed.count()


class UserPrivateInfoSerializer(serializers.ModelSerializer):

    user_rel_followed = serializers.SerializerMethodField()
    user_rel_follows = serializers.SerializerMethodField()
    user_saved_data = serializers.SerializerMethodField()
    user_created_new = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('about_me',
                  'location',
                  'first_name',
                  'last_name',
                  'user_rel_followed',
                  'user_rel_follows',
                  'user_created_new',
                  'user_saved_data')

    def update(self, instance, validated_data):
        try:
            instance.first_name = validated_data['first_name']
            instance.location = validated_data['location']
            instance.last_name = validated_data['last_name']
            instance.about_me = validated_data['about_me']
            instance.save()
        except (KeyError, DatabaseError):
            raise DatabaseError

    def get_user_created_new(self, obj):
        return obj.user_created_new.count()

    def get_user_rel_followed(self, obj):
        return obj.user_rel_followed.count()

    def get_user_rel_follows(self, obj):
        return obj.user_rel_follows.count()

    def get_user_saved_data(self, obj):
        return obj.user_saved_data.count()


class FollowSerializer(serializers.ModelSerializer):
    """
    Serializer used to save following actions
    """
    class Meta:
        model = Follow
        fields = ('follows', 'followed')

    def create(self, validated_data):
        return Follow.objects.create(**validated_data)

    def validate_followed(self, value):
        follows_id = self.initial_data['follows']
        user = get_object_or_404(User, id=follows_id)
        all_following = user.following.all()
        already_following = user.following.filter(id=value.id).first()
        if already_following is not None:
            raise ValidationError('already following')
        return value


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')

