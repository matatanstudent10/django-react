from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    create = models.DateTimeField(auto_now_add=True)

    # funcion para mostrar el nombre del producto en el admin
    def __str__(self):
        return self.nombre + ' - ' + self.descripcion[:20] + '...'