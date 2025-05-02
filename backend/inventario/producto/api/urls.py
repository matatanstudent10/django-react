from rest_framework.routers import DefaultRouter
from producto.api.views import ProductoViewSet

router = DefaultRouter()
router.register(r'producto', ProductoViewSet, basename='producto')
urlpatterns = router.urls
