import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

//PERSONAJES
import { InicioComponent as InicioPersonajeComponent } from "./componentes/personajes/inicio/inicio.component";
import { AgregarComponent as AgregarPersonajeComponent } from "./componentes/personajes/agregar/agregar.component";
import { ModificarComponent as ModificarPersonajeComponent } from "./componentes/personajes/modificar/modificar.component";


// auth0
import { AuthModule } from "@auth0/auth0-angular";



@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    InicioComponent,
    ModificarComponent,
    NavbarComponent,
    InicioPersonajeComponent,
    AgregarPersonajeComponent,
    ModificarPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      domain:'dev-x43vj1lq.us.auth0.com',
      clientId:'B4um79H6R0LwJMXyhevPyZADJGavWx6f'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
