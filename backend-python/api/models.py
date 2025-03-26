from django.db import models


class Autor(models.Model):    
    nome = models.CharField(max_length=255, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.nome}"

    class Meta:
        verbose_name_plural = "Autores"

class Noticia(models.Model):    
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE, null=True)
    titulo = models.CharField(max_length=255, null=True, blank=True)
    texto = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.autor} {self.titulo} {self.texto}"

    class Meta:
        verbose_name_plural = "Noticias"

