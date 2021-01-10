import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service';

@Component({
  selector: 'app-acciones-disponibles-componente',
  templateUrl: './acciones-disponibles-componente.component.html',
  styleUrls: ['./acciones-disponibles-componente.component.css']
})
export class AccionesDisponiblesComponenteComponent implements OnInit {
  cursos;
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
  }

}
