import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodiosComponent } from './componentes/episodios/episodios.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';

//SERVICIOS
import { HttpClientModule } from "@angular/common/http";
import { ServicioService } from "../app/servicios/servicio.service";



@NgModule({
  declarations: [
    AppComponent,
    EpisodiosComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
