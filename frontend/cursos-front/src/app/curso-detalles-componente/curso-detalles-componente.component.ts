import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api.service';

@Component({
  selector: 'app-curso-detalles-componente',
  templateUrl: './curso-detalles-componente.component.html',
  styleUrls: ['./curso-detalles-componente.component.css']
})
export class CursoDetallesComponenteComponent {
  curso;

  constructor(private route: ActivatedRoute,
              private api: ApiServiceService) { 
      
      this.obtenerCursoDetalles() 
              
    }
  
    obtenerCursoDetalles = () =>{
    const cursoId = this.route.snapshot.params.cursoId;
    this.api.obtenerCurso(cursoId).subscribe(
      data => {
        this.curso = data
      },
      error => {
        console.log(error)
      }
    )
  }
}
