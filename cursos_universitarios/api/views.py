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