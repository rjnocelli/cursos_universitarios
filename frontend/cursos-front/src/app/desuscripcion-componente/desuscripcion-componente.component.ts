import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desuscripcion-componente',
  templateUrl: './desuscripcion-componente.component.html',
  styleUrls: ['./desuscripcion-componente.component.css']
})
export class DesuscripcionComponenteComponent implements OnInit {
  desuscribirAlumnoForm;
  alumnos;
  cursos;

  constructor(private formBuilder: FormBuilder,
              private api: ApiServiceService,
              private router: Router) {
    
    this.desuscribirAlumnoForm = this.formBuilder.group({
      alumno: '',
      curso: '',
    });
  }         

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

  desuscribirAlumno(data){
    this.api.desuscribirAlumno(data).subscribe(
      data => {
        console.log(data)
        alert(`alumno desuscripto`)
      },
      error => {
        alert('ERROR!!! Alumno no suscripto a este curso!')
        console.log(error)
      })
    this.desuscribirAlumnoForm.reset();
    this.router.navigate([''])
  }

}
