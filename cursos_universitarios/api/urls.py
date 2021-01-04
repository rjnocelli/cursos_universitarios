from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_vistas, name='api'),
    path('alumnos/', views.AlumnoViewSet.as_view(), name='alumnos-lista'),
    path('alumnos/<alumno_id>/', views.AlumnoViewSet.as_view(), name='alumnos'),
    path('curso/<curso_id>/', views.obtener_curso, name='cursos-lista'),
    path('suscripcion/', views.SuscripcionViewSet.as_view(), name='suscripcion'),
    path('curso/<curso_id>/imprimir-lista-alumnos/', views.imprimir_listado_alumnos, name='imprimir-listado-alumnos'),

]

