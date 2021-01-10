import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api.service';

@Component({
  selector: 'app-alumno-detalles-componente',
  templateUrl: './alumno-detalles-componente.component.html',
  styleUrls: ['./alumno-detalles-componente.component.css']
})
export class AlumnoDetallesComponenteComponent{
  alumno;

  constructor(private route: ActivatedRoute,
               private api: ApiServiceService) { 
      this.obtenerAlumnoDetalles()
    }

  obtenerAlumnoDetalles = () =>{
    const alumnoId = this.route.snapshot.params.alumnoId;
      this.api.obtenerAlumno(alumnoId).subscribe(
        data => {
          this.alumno = data
        },
        error => {
          console.log(error)
        }
      )
    }
}
