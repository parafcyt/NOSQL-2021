import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTES
import { DisponiblesComponent } from './componentes/disponibles/disponibles.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ReservadosComponent } from './componentes/reservados/reservados.component';
import { CompradosComponent } from './componentes/comprados/comprados.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ServicioService } from "./servicios/servicio.service";


@NgModule({
  declarations: [
    AppComponent,
    DisponiblesComponent,
    NavbarComponent,
    ReservadosComponent,
    CompradosComponent
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
