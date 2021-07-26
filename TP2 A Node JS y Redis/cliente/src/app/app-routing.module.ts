import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTO LOS COMPONENTES PARA LAS RUTAS
import { EpisodiosComponent } from "../app/componentes/episodios/episodios.component";
import { PersonajesComponent } from "../app/componentes/personajes/personajes.component";


const rutas: Routes = [
  {path:'',component:EpisodiosComponent}, //ppal
  {path:'episodio/:id',component:PersonajesComponent}, //ruta: episodio/nroDeEpisodio
  {path:'**',component:EpisodiosComponent} //pagina no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
