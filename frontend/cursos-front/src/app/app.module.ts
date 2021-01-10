import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AccionesDisponiblesComponenteComponent } from './acciones-disponibles-componente/acciones-disponibles-componente.component';
import { AgregarAlumnoComponenteComponent } from './agregar-alumno-componente/agregar-alumno-componente.component';
import { AgregarCursoComponenteComponent } from './agregar-curso-componente/agregar-curso-componente.component';
import { AlumnoDetallesComponenteComponent } from './alumno-detalles-componente/alumno-detalles-componente.component';
import { AlumnosListaComponenteComponent } from './alumnos-lista-componente/alumnos-lista-componente.component';
import { CursoDetallesComponenteComponent } from './curso-detalles-componente/curso-detalles-componente.component';
import { CursosListaComponenteComponent } from './cursos-lista-componente/cursos-lista-componente.component';
import { SuscripcionComponenteComponent } from './suscripcion-componente/suscripcion-componente.component';
import { DesuscripcionComponenteComponent } from './desuscripcion-componente/desuscripcion-componente.component';
import { CalificarAlumnoComponenteComponent } from './calificar-alumno-componente/calificar-alumno-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    AccionesDisponiblesComponenteComponent,
    AgregarAlumnoComponenteComponent,
    AgregarCursoComponenteComponent,
    AlumnoDetallesComponenteComponent,
    AlumnosListaComponenteComponent,
    CursoDetallesComponenteComponent,
    CursosListaComponenteComponent,
    SuscripcionComponenteComponent,
    DesuscripcionComponenteComponent,
    CalificarAlumnoComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AccionesDisponiblesComponenteComponent },
      { path: 'cursos', component: CursosListaComponenteComponent },
      { path: 'cursos/:cursoId', component: CursoDetallesComponenteComponent },
      { path: 'alumnos/:alumnoId', component: AlumnoDetallesComponenteComponent },
      { path: 'alumnos', component: AlumnosListaComponenteComponent },
      { path: 'agregar-alumno', component: AgregarAlumnoComponenteComponent },
      { path: 'agregar-curso', component: AgregarCursoComponenteComponent, },
      { path: 'suscribir', component: SuscripcionComponenteComponent },
      { path: 'desuscribir', component: DesuscripcionComponenteComponent },
      { path: 'calificar', component: CalificarAlumnoComponenteComponent },
    ])
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
