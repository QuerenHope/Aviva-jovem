from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=200)
    nome = models.CharField(max_length=100)
    data_nascimento = models.CharField(max_length=20)
    cpf = models.CharField(max_length=11)
    rg = models.CharField(max_length=15, blank=True, null=True)
    telefone = models.CharField(max_length=15, blank=True, null=True)
    cidade = models.CharField(max_length=100, blank=True, null=True)
    uf = models.CharField(max_length=2, blank=True, null=True)
    pastor = models.CharField(max_length=100, blank=True, null=True)
    meio_transporte = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        db_table = "inscricao"
