from cursos.models import Alumno, Curso, Suscripcion
from rest_framework import serializers

# Serializadores para clase Alumno

class ServidorClienteAlumnoSerializador(serializers.ModelSerializer):
    promedio = serializers.DecimalField(source='obtener_promedio_total', max_digits=4, decimal_places=2)
    cantidad_de_cursos = serializers.IntegerField(source='obtener_cantidad_total_de_cursos')
    cantidad_de_cursos_aprobados = serializers.IntegerField(source='obtener_cantidad_cursos_aprobados')

    class Meta:
        model = Alumno
        fields = '__all__'

class ClienteServidorAlumnoSerializador(serializers.ModelSerializer):

    class Meta:
        model = Alumno
        fields = '__all__'

# Serializadores para clase Curso

class ServidorClienteCursoSerializador(serializers.ModelSerializer):
    alumnos_suscriptos = serializers.IntegerField(source='obtener_cantidad_alumnos_suscriptos')
    class Meta:
        model = Curso
        fields = '__all__'
    
class ClienteServidorCursoSerializador(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

# Serializadores para clase Suscripcion

class ServidorClienteSuscripcionSerializador(serializers.ModelSerializer):
    alumno = ServidorClienteAlumnoSerializador(many=False)
    curso = ServidorClienteCursoSerializador(many=False)
    class Meta:
        model = Suscripcion
        fields = ["alumno","curso"]

class ClienteServidorSuscripcionSerializador(serializers.Serializer):
    alumno_id = serializers.IntegerField()
    curso_id = serializers.IntegerField()

    def create(self, request):
        curso = Curso.objects.get(id=request['curso_id'])
        alumno = Alumno.objects.get(id=request['alumno_id'])
        try:
            suscripcion = Suscripcion.objects.get(curso=curso, alumno=alumno)
        except:
            suscripcion = Suscripcion.objects.create(curso=curso, alumno=alumno)
        return suscripcion

class ClienteServidorAgregarCalificacionSerializador(serializers.Serializer):
    alumno_id = serializers.IntegerField()
    curso_id = serializers.IntegerField()
    calificacion = serializers.DecimalField(max_digits=4, decimal_places=2)

    def create(self, request):
        curso = Curso.objects.get(id=request['curso_id'])
        alumno = Alumno.objects.get(id=request['alumno_id'])
        calificacion = request['calificacion']
        suscripcion = Suscripcion.objects.get(curso=curso, alumno=alumno)
        suscripcion.calificacion = calificacion
        suscripcion.save()
        return suscripcion