from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from cursos.models import Alumno, Curso, Suscripcion
from .serializers import (ServidorClienteAlumnoSerializador, ClienteServidorAlumnoSerializador, ServidorClienteCursoSerializador,
                         ClienteServidorCursoSerializador, ServidorClienteSuscripcionSerializador, ClienteServidorSuscripcionSerializador,
                         ClienteServidorAgregarCalificacionSerializador)
                        
@api_view(['GET'])
def api_vistas(request):
    api_urls = {
        'almunos-lista': '/alumnos/',
        'alumnos-id': '/alumnos/<alumno_id>/',
        'cursos-lista': '/cursos/',
        'cursos-id': '/cursos/<curso_id>/',
        'curso-suscriptores-csv': '/cursos/<curso_id>/imprimir-lista-alumnos/',
        'suscripcion (CRUD)': '/suscripcion/',
    }
    return Response(api_urls)

class AlumnoViewSet(APIView):

    def get(self, request, **kwargs):
        if kwargs:
            query = Alumno.objects.get(id=kwargs['alumno_id'])
            serializer = ServidorClienteAlumnoSerializador(query)
        else:
            query = Alumno.objects.all()
            serializer = ServidorClienteAlumnoSerializador(query, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ClienteServidorAlumnoSerializador(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, **kwargs):
        alumno = Alumno.objects.get(id=kwargs['alumno_id'])
        serializer = ClienteServidorAlumnoSerializador(alumno, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, **kwargs):
        alumno = Alumno.objects.get(id=kwargs['alumno_id'])
        alumno.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CursoViewSet(APIView):

    def get(self, request, **kwargs):
        if kwargs:
            query = Curso.objects.get(id=kwargs['curso_id'])
            serializer = ServidorClienteCursoSerializador(query)
        else:
            query = Curso.objects.all()
            serializer = ServidorClienteCursoSerializador(query, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ClienteServidorCursoSerializador(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, **kwargs):
        curso = Curso.objects.get(id=kwargs['curso_id'])
        serializer = ClienteServidorCursoSerializador(curso, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, **kwargs):
        curso = Curso.objects.get(id=kwargs['curso_id'])
        curso.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class SuscripcionViewSet(APIView):
    
    def get(self, request):
        query = Suscripcion.objects.all()
        serializer = ServidorClienteSuscripcionSerializador(query, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ClienteServidorSuscripcionSerializador(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        serializer = ClienteServidorAgregarCalificacionSerializador(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        alumno_id = request.data.get('alumno_id')
        curso_id = request.data.get('curso_id')
        suscripcion = Suscripcion.objects.all().filter(alumno__id=alumno_id).filter(curso__id=curso_id)
        if suscripcion:
            suscripcion.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

def imprimir_listado_alumnos(request, curso_id):
    import csv
    if request.method == "GET":
        curso = Curso.objects.get(id=curso_id)
        suscripciones = curso.suscripcion_set.all()

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename="{curso.nombre}-inscriptos.csv"'
        
        writer = csv.writer(response)
        writer.writerow(['Alumnos','Curso',])
        for i in range(0, len(suscripciones)):
            alumno = f'{suscripciones[i].alumno.nombre} {suscripciones[i].alumno.apellido}'
            writer.writerow([alumno, curso.nombre])
        return response
    else:
        return HttpResponse('Error')