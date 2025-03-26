from django.urls import include, path
from rest_framework import routers

from api.views import AutorViewSet, NoticiaViewSet

router = routers.DefaultRouter()

router.register('autor', AutorViewSet)
router.register('noticias', NoticiaViewSet)

urlpatterns = [
    path("", include(router.urls)),
]