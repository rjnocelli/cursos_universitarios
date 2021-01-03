from cursos.models import Alumno, Curso, Suscripcion
from rest_framework import serializers

class AlumnoSerializador(serializers.ModelSerializer):
    promedio = serializers.DecimalField(source='obtener_promedio_total', max_digits=4, decimal_places=2)
    cantidad_de_cursos = serializers.IntegerField(source='obtener_cantidad_total_de_cursos')
    cantidad_de_cursos_aprobados = serializers.IntegerField(source='obtener_cantidad_cursos_aprobados')

    class Meta:
        model = Alumno
        fields = '__all__'

class CursoSerializador(serializers.ModelSerializer):
    alumnos_suscriptos = serializers.IntegerField(source='obtener_cantidad_alumnos_suscriptos')
    class Meta:
        model = Curso
        fields = '__all__'

class ServidorClienteSuscripcionSerializador(serializers.ModelSerializer):
    alumno = AlumnoSerializador(many=False)
    curso = CursoSerializador(many=False)
    class Meta:
        model = Suscripcion
        fields = ["alumno","curso"]