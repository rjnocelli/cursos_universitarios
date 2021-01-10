import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificar-alumno-componente',
  templateUrl: './calificar-alumno-componente.component.html',
  styleUrls: ['./calificar-alumno-componente.component.css']
})
export class CalificarAlumnoComponenteComponent implements OnInit {
  alumnos;
  cursos;
  calificacion;
  calificarAlumnoForm;

  constructor(private formBuilder: FormBuilder,
              private api: ApiServiceService,
              private router: Router) {
    this.calificarAlumnoForm = this.formBuilder.group({
      alumno: '',
      curso: '',
      calificacion: 0,
    });
  }
  ngOnInit(): void {
    this.api.obtenerAlumnosTodos().subscribe(
      data => {
        this.alumnos = data
      }, 
      error => {
        console.log(error)
      });
    this.api.obtenerCursosTodos().subscribe(
      data => {
        this.cursos = data
      }, 
      error => {
        console.log(error)
      }
    )}

  calificarAlumno(data){
    this.api.calificarAlumno(data).subscribe(
      data => {
        console.log(data)
        alert(`calificaion agregada`)
      },
      error => {
        console.log(error)
        alert(`ERROR!!! Prueba suscribir al alumno primero!`)
      })
    this.calificarAlumnoForm.reset();
    this.router.navigate([''])
  }
}
