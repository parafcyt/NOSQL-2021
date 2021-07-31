import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

// auth0
import { AuthModule } from "@auth0/auth0-angular";



@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    InicioComponent,
    ModificarComponent,
    NavbarComponent
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
