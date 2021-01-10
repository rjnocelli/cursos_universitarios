import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suscripcion-componente',
  templateUrl: './suscripcion-componente.component.html',
  styleUrls: ['./suscripcion-componente.component.css']
})
export class SuscripcionComponenteComponent implements OnInit {

  alumnos;
  cursos;
  suscribirAlumnoForm;

  constructor(private formBuilder: FormBuilder,
              private api: ApiServiceService, 
              private router: Router) { }

  ngOnInit(): void {
    this.api.obtenerAlumnosTodos().subscribe(
      data => {
        this.alumnos = data
      }, 
      error => {
        console.log(error)
      }
    );
    this.api.obtenerCursosTodos().subscribe(
      data => {
        this.cursos = data
      }, 
      error => {
        console.log(error)
      }
    )
  }

  suscribirAlumno(data){
    this.api.suscribirAlumno(data).subscribe(
      data => {
        console.log(data)
        alert(`alumno suscripto`)
      },
      error => {
        alert('ERROR!!!')
        console.log(error)
      })
    this.suscribirAlumnoForm.reset();
    this.router.navigate([''])
  }

}
