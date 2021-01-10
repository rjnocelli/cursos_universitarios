import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-lista-componente',
  templateUrl: './alumnos-lista-componente.component.html',
  styleUrls: ['./alumnos-lista-componente.component.css']
})
export class AlumnosListaComponenteComponent {
  alumnos;
  alumno_id;

  constructor(private api: ApiServiceService,
              private router: Router,) {
                
              this.obtenerAlumnos();
      }
  
  obtenerAlumnos = () => {
    this.api.obtenerAlumnosTodos().subscribe(
      data => {
        this.alumnos = data
      },
      error => {
        console.log(error)
      })
    }

  borrarAlumno = (alumno_id) => {
    this.api.eliminarAlumno(alumno_id).subscribe(
      data => {
        this.alumnos = this.alumnos.filter(item => item.id != alumno_id)
        alert("alumno borrado de base de datos")
      },
      error => {
        console.log(error)
      })
  }

  

}
