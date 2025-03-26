from django.contrib import admin

from api.models import Autor, Noticia


@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
    exclude = ()

@admin.register(Noticia)
class NoticiaAdmin(admin.ModelAdmin):
    exclude = ()

