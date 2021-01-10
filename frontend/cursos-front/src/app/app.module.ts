import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccionesDisponiblesComponenteComponent } from './acciones-disponibles-componente/acciones-disponibles-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    AccionesDisponiblesComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
