from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "date_joined",
            "email",
            "username",
            "nome",
            "data_nascimento",
            "cpf",
            "rg",
            "telefone",
            "cidade",
            "uf",
            "pastor",
            "meio_transporte",
        ]
        read_only_fields = ["date_joined"]

    def create(self, validated_data: dict) -> User:
        return User.objects.create_user(**validated_data)

    def perform_update(self, instance: User, validated_data: dict) -> User:
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance
