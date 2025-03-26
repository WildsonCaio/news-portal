from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from api.models import Autor, Noticia
from api.serializers import AutorSerializer, NoticiaSerializer
from api.filters import AutorFilter, NoticiaFilter

class AutorViewSet(viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer
    filter_backends = [DjangoFilterBackend,]  
    filterset_class = AutorFilter

class NoticiaViewSet(viewsets.ModelViewSet):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    filter_backends = [DjangoFilterBackend,] 
    filterset_class = NoticiaFilter

