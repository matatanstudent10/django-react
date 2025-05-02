from rest_framework import viewsets
from producto.models import Producto
from .serializers import ProductoSerializer



class ProductoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows productos to be viewed or edited.
    """
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
