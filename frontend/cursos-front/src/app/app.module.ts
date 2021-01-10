import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccionesDisponiblesComponenteComponent } from './acciones-disponibles-componente/acciones-disponibles-componente.component';
import { AgregarAlumnoComponenteComponent } from './agregar-alumno-componente/agregar-alumno-componente.component';
import { AgregarCursoComponenteComponent } from './agregar-curso-componente/agregar-curso-componente.component';
import { AlumnoDetallesComponenteComponent } from './alumno-detalles-componente/alumno-detalles-componente.component';
import { AlumnosListaComponenteComponent } from './alumnos-lista-componente/alumnos-lista-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    AccionesDisponiblesComponenteComponent,
    AgregarAlumnoComponenteComponent,
    AgregarCursoComponenteComponent,
    AlumnoDetallesComponenteComponent,
    AlumnosListaComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
