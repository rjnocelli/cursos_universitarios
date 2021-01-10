import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agregar-curso-componente',
  templateUrl: './agregar-curso-componente.component.html',
  styleUrls: ['./agregar-curso-componente.component.css']
})
export class AgregarCursoComponenteComponent{
  agregarCursoForm;
  curso_data;

  constructor(private formBuilder: FormBuilder,
              private api: ApiServiceService, 
              private router: Router) { 

    this.agregarCursoForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
    });          
  }

  enviarCursoData(cursoData) {
    this.api.agregarCurso(cursoData).subscribe(
      data => {
        this.curso_data = data
        alert(`curso agregado a la base de datos`)
      },
      error => {
        alert('ERROR!!!')
        console.log(error)
      }
    )
    this.agregarCursoForm.reset();
    this.router.navigate(['cursos/'])
  }

}
