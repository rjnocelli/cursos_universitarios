from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    dni = models.IntegerField()

    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    
class Curso(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=100)

    def __str__(self):
        return f'{self.nombre}'