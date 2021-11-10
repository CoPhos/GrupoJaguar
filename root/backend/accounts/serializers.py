from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import fields
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','username', 'name')