import django_filters
from .models import Autor, Noticia

class AutorFilter(django_filters.FilterSet):
    
    titulo = django_filters.CharFilter(lookup_expr='icontains')
    
    class Meta:
        model = Autor
        fields = '__all__'

class NoticiaFilter(django_filters.FilterSet):
    class Meta:
        model = Noticia
        fields = '__all__'