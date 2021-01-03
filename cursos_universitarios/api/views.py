from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from cursos.models import Alumno, Curso, Suscripcion
from .serializers import AlumnoSerializador, CursoSerializador, CrearSuscripcion, ClientToServerInscripcion, ClienteAServidorCalificacion

@api_view(['GET'])
def api_vistas(request):
    api_urls = {
        'almunos-lista': '/alumnos-lista/',
        'cursos-lista': '/cursos-lista/',
        'curso-detalles': '/curso/<curso_id>/',
        'curso-suscriptores-csv': 'curso/<curso_id>/imprimir-lista-alumnos/',
        'suscripcion': '/suscripcion/',
    }
    return Response(api_urls)

@api_view(['GET'])
def obtener_lista_alumnos(request):
    alumnos = Alumno.objects.all()
    serializer = AlumnoSerializador(alumnos, many=True)
    return Response(serializer.data)