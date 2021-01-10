import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api.service';

@Component({
  selector: 'app-cursos-lista-componente',
  templateUrl: './cursos-lista-componente.component.html',
  styleUrls: ['./cursos-lista-componente.component.css']
})
export class CursosListaComponenteComponent {
  cursos;

  constructor(private api: ApiServiceService) {

  this.obtenerCursos();

  }

  obtenerCursos = () => {
    this.api.obtenerCursosTodos().subscribe(
      data => {
        this.cursos = data
      },
      error => {
        console.log(error)
      }
    )
  }

  borrarCurso = (curso_id) => {
    this.api.eliminarCurso(curso_id).subscribe(
      data => {
        this.cursos = this.cursos.filter(item => item.id != curso_id)
        alert("curso borrado de base de datos")
      },
      error => {
        console.log(error)
      });
  }
}
