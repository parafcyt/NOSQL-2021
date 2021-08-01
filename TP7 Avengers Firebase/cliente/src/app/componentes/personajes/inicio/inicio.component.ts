import { Component, OnInit } from '@angular/core';

//ENRUTADOR
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

//DATOS PARA PASAR A MODIFICAR
import { Datos } from 'src/app/providers/datos';

//SERVICIO
import { ServicioService } from 'src/app/servicios/servicio.service';

//SWAL
import Swal from 'sweetalert2';






@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  personajes:any[];

  personajesCompletos:any[];

  peliculaAFiltrar:string='';

  constructor(private servicioService:ServicioService, private enrutador: Router, private datos:Datos, public auth:AuthService) { }

  ngOnInit(): void {
    this.listarPersonajesF();
    
  }

  //
  filtrarPersonajes(){

    if (this.peliculaAFiltrar!="") {
      this.personajes=[];
      this.personajesCompletos.forEach(personaje=>{
        personaje.peliculas.forEach((pelicula:string) => {
          if ( (pelicula.toLowerCase().includes(this.peliculaAFiltrar.toLowerCase())) && (this.personajes.indexOf(personaje)===-1) ) {
            this.personajes.push(personaje)}
          });
      });
    } 
    else {
      this.personajes=this.personajesCompletos;
    }
    
  }


  listarPersonajesF(){
    this.servicioService.listarPersonajesS().subscribe((res:any)=>{
      
      this.personajes=res.map((personaje:any)=>{
        personaje.expandido=false
        return personaje;
      });
      console.log(this.personajes);
      this.personajesCompletos=this.personajes;
    });
  }


  modificarPersonajeF(datosPersonaje:any){
    this.datos.almacenarPersonaje(datosPersonaje);
    this.enrutador.navigate(["personajes/modificar"]);

  }

  eliminarPersonajeF(personaje:any){
    Swal.fire({
      icon: 'warning',
      title: 'Esta seguro que quiere eliminar a\n'+personaje.hero+'?',
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Personaje Eliminado!', '', 'success');
        this.servicioService.eliminarPersonajeS(personaje.id).subscribe(res=>{
          this.listarPersonajesF();
        });
        
      } 

    });

  }

}
