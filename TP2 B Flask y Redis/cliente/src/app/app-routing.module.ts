import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//COMPONENTES
import { DisponiblesComponent } from "./componentes/disponibles/disponibles.component";
import { ReservadosComponent } from "./componentes/reservados/reservados.component";
import { CompradosComponent } from "./componentes/comprados/comprados.component";


const routes: Routes = [
  {path:'', redirectTo:'/disponibles',pathMatch:'full'},
  {path:'disponibles', component: DisponiblesComponent},
  {path:'comprados', component: CompradosComponent },
  {path:'reservados', component: ReservadosComponent},
  {path:'**', component: DisponiblesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
