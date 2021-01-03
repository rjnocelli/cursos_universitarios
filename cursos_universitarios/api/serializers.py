from cursos.models import Alumno, Curso, Suscripcion
from rest_framework import serializers

class AlumnoSerializador(serializers.ModelSerializer):
    promedio = serializers.DecimalField(source='obtener_promedio_total', max_digits=4, decimal_places=2)
    cantidad_de_cursos = serializers.IntegerField(source='obtener_cantidad_total_de_cursos')
    cantidad_de_cursos_aprobados = serializers.IntegerField(source='obtener_cantidad_cursos_aprobados')

    class Meta:
        model = Alumno
        fields = '__all__'