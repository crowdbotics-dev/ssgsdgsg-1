from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NewConnectorViewSet

router = DefaultRouter()
router.register("newconnector", NewConnectorViewSet, basename="newconnector")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
