from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from cursos.models import Alumno, Curso, Suscripcion
from .serializers import (AlumnoSerializador, CursoSerializador, ServidorClienteSuscripcionSerializador, 
                        ClienteServidorSuscripcionSerializador, ClienteServidorAgregarCalificacionSerializador)

@api_view(['GET'])
def api_vistas(request):
    api_urls = {
        'almunos-lista': '/alumnos-lista/',
        'cursos-lista': '/cursos-lista/',
        'curso-detalles': '/curso/<curso_id>/',
        'curso-suscriptores-csv': 'curso/<curso_id>/imprimir-lista-alumnos/',
        'suscripcion (CRUD)': '/suscripcion/',
    }
    return Response(api_urls)

@api_view(['GET'])
def obtener_lista_alumnos(request):
    alumnos = Alumno.objects.all()
    serializer = AlumnoSerializador(alumnos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def obtener_lista_cursos(request):
    cursos = Curso.objects.all()
    serializer = CursoSerializador(cursos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def obtener_curso(request, curso_id):
    curso = Curso.objects.get(id = curso_id)
    serializer = CursoSerializador(curso)
    return Response(serializer.data)

class SuscripcionModelViewSet(APIView):

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
        suscripcion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)