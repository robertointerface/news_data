"""
    serializers - Serializers class used for the creating, retrieval, update and  delete of
    objects on tables in 'accounts.models'

    Members:
        # UserSerializer - Serializer with public user information.
        # UserInfoSerializer

"""
from rest_framework import serializers
from rest_framework.serializers import ValidationError
from rest_framework_jwt.settings import api_settings
from django.shortcuts import get_object_or_404
from django.db import DatabaseError
from .models import User, Follow


class UserSerializer(serializers.ModelSerializer):
    """
    standard User serializer
    """
    class Meta:
        """Serializer Meta"""
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'location', 'about_me')


class UserInfoSerializer(serializers.ModelSerializer):
    """
    serializer for fileds in User'  that are public information
    """
    user_created_new = serializers.SerializerMethodField()
    user_rel_followed = serializers.SerializerMethodField()

    class Meta:
        """Serializer Meta"""
        model = User
        fields = ('username', 'about_me', 'location', 'user_created_new', 'user_rel_followed')

    def get_user_created_new(self, obj):
        """Get only the count"""
        return obj.user_created_new.count()

    def get_user_rel_followed(self, obj):
        """Get the count of users that are following you"""
        return obj.user_rel_followed.count()


class UserPrivateInfoSerializer(serializers.ModelSerializer):
    """
    Serializer use for the fields modifications on 'User', authentication required to access.
    """
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
        """
        Update 'User' model
        @param
            instance - serializer instance
            validated_data - data to update, validated accordingly to serializer.
        @return
            On Success - return none
            On Failure - raise DatabaseError
        """
        try:
            instance.first_name = validated_data['first_name']
            instance.location = validated_data['location']
            instance.last_name = validated_data['last_name']
            instance.about_me = validated_data['about_me']
            instance.save()
        except (KeyError, DatabaseError):
            raise DatabaseError

    def get_user_created_new(self, obj):
        """Get the count of news """
        return obj.user_created_new.count()

    def get_user_rel_followed(self, obj):
        """Get the count of user_rel_followed """
        return obj.user_rel_followed.count()

    def get_user_rel_follows(self, obj):
        """Get the count of user_rel_follows """
        return obj.user_rel_follows.count()

    def get_user_saved_data(self, obj):
        """Get the count of user_saved_data """
        return obj.user_saved_data.count()


class FollowSerializer(serializers.ModelSerializer):
    """
    Serializer used to create rows on table 'Follow'
    """
    class Meta:
        model = Follow
        fields = ('follows', 'followed')

    def create(self, validated_data):
        return Follow.objects.create(**validated_data)

    def validate_followed(self, value):
        """
        Validate if user is already following that user.

        @param
            value - value to validate

        @return
            On success - return value
            On failure - raise ValidationError
        """
        follows_id = self.initial_data['follows']
        user = get_object_or_404(User, id=follows_id)
        already_following = user.following.filter(id=value.id).first()
        if already_following is not None:
            raise ValidationError('already following')
        return value


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('token', 'username', 'password')

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



