import { Component, OnInit } from '@angular/core';

//SWEETALERT
import Swal from 'sweetalert2';

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

//RUTAS
import { Router } from "@angular/router";

//PROVIDER DATOS
import { Datos } from "../../providers/datos";

//AUTH0
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peliculas;


  constructor( public servicioService:ServicioService,
              private enrutador: Router,
              private datos:Datos,
              public auth:AuthService) { }

  ngOnInit(): void {

    //lo primero que hago es listar las pelis
    this.listarPeliculasF();
    

  }

  listarPeliculasF(){
    this.servicioService.listarPeliculasS().subscribe(res=>{
      console.log(res);
      this.peliculas=res;
      
    });

  }

  modificarPeliculaF(pelicula:any){
    this.datos.almacenarPelicula(pelicula);
    this.enrutador.navigate(['modificar']);

  }

  eliminarPeliculaF(pelicula:any){
    Swal.fire({
      icon: 'warning',
      title: 'Esta seguro que quiere eliminar \n'+pelicula.title+'?',
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Pelicula Eliminada!', '', 'success');
        this.servicioService.eliminarPeliculaS(pelicula.id).subscribe(res=>{
          this.listarPeliculasF();
        });
        
      } 

    });

  }


}
