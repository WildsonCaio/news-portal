from rest_framework import serializers
import django_filters
from api.models import Autor, Noticia


class AutorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Autor
        fields = '__all__'
        

class NoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = '__all__'

