import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  // url para conectar al api servido por la imagen Docker
  baseUrl = "http://127.0.0.1/api/"

  // ulr para conectar al api en localhost
  // baseUrl = "http://127.0.0.1:8000/api/"

  httpHeaders = new HttpHeaders({"Content-Type":"application/json"})

  obtenerCursosTodos(): Observable <any>{
    return this.http.get(this.baseUrl + 'cursos/', 
    {headers: this.httpHeaders})
  }

  obtenerCurso(curso_id): Observable <any>{
    return this.http.get(this.baseUrl + 'cursos/' + curso_id + '/',
    {headers: this.httpHeaders})
  }

  agregarCurso(data): Observable <any>{
    const body = {'nombre': data.nombre, 'descripcion': data.descripcion}
    return this.http.post(this.baseUrl + 'cursos/', body,
    {headers: this.httpHeaders})
  }

  eliminarCurso(curso_id): Observable <any>{
    return this.http.delete(this.baseUrl + 'cursos/' + curso_id + '/',
    {headers: this.httpHeaders})
  }

  obtenerAlumnosTodos(): Observable <any>{
    return this.http.get(this.baseUrl + 'alumnos/', 
    {headers: this.httpHeaders})
  }

  obtenerAlumno(alumno_id): Observable <any>{
    return this.http.get(this.baseUrl + 'alumnos/' + alumno_id + '/',
    {headers: this.httpHeaders})
  }

  agregarAlumno(data): Observable <any>{
    const body = {'nombre': data.nombre, 'apellido': data.apellido, 'email': data.email, 'dni': data.dni}
    return this.http.post(this.baseUrl + 'alumnos/', body,
    {headers: this.httpHeaders})
  }

  eliminarAlumno(alumno_id): Observable <any>{
    return this.http.delete(this.baseUrl + 'alumnos/' + alumno_id + '/',
    {headers: this.httpHeaders})
  }

  suscribirAlumno(data): Observable <any> {
    const body = {'curso_id': data.curso.id, 'alumno_id': data.alumno.id}
    return this.http.post(this.baseUrl + 'suscripcion/', body,
    {headers: this.httpHeaders})
  }

  desuscribirAlumno(data): Observable <any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        curso_id : data.curso.id,
        alumno_id: data.alumno.id,
      },
    };
    return this.http.delete(this.baseUrl + 'suscripcion/', options)
  }

  calificarAlumno(data): Observable <any> {
    const body = {'curso_id': data.curso.id, 'alumno_id': data.alumno.id, 'calificacion': data.calificacion}
    return this.http.put(this.baseUrl + 'suscripcion/', body,
    {headers: this.httpHeaders})
  }

}
