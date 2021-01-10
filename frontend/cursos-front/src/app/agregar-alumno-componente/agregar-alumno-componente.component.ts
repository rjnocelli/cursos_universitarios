import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agregar-alumno-componente',
  templateUrl: './agregar-alumno-componente.component.html',
  styleUrls: ['./agregar-alumno-componente.component.css']
})
export class AgregarAlumnoComponenteComponent implements OnInit {
  agregarAlumnoForm;
  alumno_data;

  constructor(private formBuilder: FormBuilder, 
              private api: ApiServiceService,   
              private router: Router) { 
                this.agregarAlumnoForm

    this.agregarAlumnoForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      email: '',
      dni: '',
    });
  }

  enviarAlumnoData(alumnoData) {
    this.api.agregarAlumno(alumnoData).subscribe(
      data => {
        this.alumno_data = data
        alert(`alumno agregado a la base de datos`)
      },
      error => {
        alert('ERROR!!!')
        console.log(error)
      }
    )
    this.agregarAlumnoForm.reset();
    this.router.navigate(['alumnos'])
  }

  ngOnInit(): void {
  }

}
