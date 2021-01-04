from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_vistas, name='api'),
    path('alumnos-lista/', views.obtener_lista_alumnos, name='alumnos-lista'),
    path('cursos-lista/', views.obtener_lista_cursos, name='cursos-lista'),
    path('cursos/<curso_id>/', views.obtener_curso, name='cursos-lista'),
]
