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

class Suscripcion(models.Model):
    curso = models.ForeignKey("Curso", verbose_name="Curso", on_delete=models.CASCADE)
    alumno = models.ForeignKey("Alumno", verbose_name="Alumno", on_delete=models.CASCADE)
    calificacion = models.DecimalField(null=True, blank=True, max_digits=4, decimal_places=2)
    fecha_de_inicio = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.curso.nombre} - {self.alumno.nombre} {self.alumno.apellido}'