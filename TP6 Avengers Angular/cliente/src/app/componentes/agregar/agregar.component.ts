import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  peliculasTraidas:any;

  peliculaAbuscar:string='';

  constructor(private servicioService:ServicioService) { }

  ngOnInit(): void {
  }

  buscarPeliculasF(){
    this.servicioService.buscarPeliculaS(this.peliculaAbuscar).subscribe((res:any)=>{
      console.log(res);
      
      this.peliculasTraidas=res.results;
    });
  }

  cargarPeliculaF(pelicula){
    this.servicioService.cargarPeliculaS(pelicula.id).subscribe(res=>{
      
      Swal.fire({
        icon: 'success',
        title: 'Ha agregado la pelicula: \n'+pelicula.title,
        confirmButtonText: 'Aceptar',
      });
    });
  }

}
