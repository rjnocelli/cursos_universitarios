from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_vistas, name='api'),
    path('alumnos/', views.AlumnoViewSet.as_view(), name='alumnos-lista'),
    path('alumnos/<alumno_id>/', views.AlumnoViewSet.as_view(), name='alumno'),
    path('cursos/', views.CursoViewSet.as_view(), name='cursos-lista'),
    path('cursos/<curso_id>/', views.CursoViewSet.as_view(), name='curso'),
    path('suscripcion/', views.SuscripcionViewSet.as_view(), name='suscripcion'),
    path('curso/<curso_id>/imprimir-lista-alumnos/', views.imprimir_listado_alumnos, name='imprimir-listado-alumnos'),

]

