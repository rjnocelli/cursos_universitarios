import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccionesDisponiblesComponenteComponent } from './acciones-disponibles-componente/acciones-disponibles-componente.component';
import { AgregarAlumnoComponenteComponent } from './agregar-alumno-componente/agregar-alumno-componente.component';
import { AgregarCursoComponenteComponent } from './agregar-curso-componente/agregar-curso-componente.component';
import { AlumnoDetallesComponenteComponent } from './alumno-detalles-componente/alumno-detalles-componente.component';
import { AlumnosListaComponenteComponent } from './alumnos-lista-componente/alumnos-lista-componente.component';
import { CursoDetallesComponenteComponent } from './curso-detalles-componente/curso-detalles-componente.component';
import { CursosListaComponenteComponent } from './cursos-lista-componente/cursos-lista-componente.component';
import { SuscripcionComponenteComponent } from './suscripcion-componente/suscripcion-componente.component';
import { DesuscripcionComponenteComponent } from './desuscripcion-componente/desuscripcion-componente.component';

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
    DesuscripcionComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
