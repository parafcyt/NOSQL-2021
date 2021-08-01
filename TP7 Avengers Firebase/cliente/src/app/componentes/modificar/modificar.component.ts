import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/providers/datos';

//ENRUTADOR
import { Router } from "@angular/router";

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

//FORMULARIO
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

//

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  pelicula: any;

  peliculaFormulario:FormGroup;

  constructor(private datos :Datos,
              private enrutador: Router,
              private servicioService:ServicioService,
              private formbuilder:FormBuilder ) {
    
              }

  ngOnInit(): void {
    this.pelicula=this.datos.obtenerPelicula();

    this.peliculaFormulario=this.formbuilder.group({
      titulo: [this.pelicula.title, Validators.required],
      frasePelicula: [this.pelicula.tagline, Validators.required],
      website: [this.pelicula.homepage, Validators.required],
      fechaEstreno: [new Date(this.pelicula.release_date).toLocaleDateString(), Validators.required]
    });
    
  }

  onSubmit(){
    console.log(this.peliculaFormulario.value);

    this.pelicula.title = this.peliculaFormulario.value.titulo;
    this.pelicula.tagline = this.peliculaFormulario.value.frasePelicula;
    this.pelicula.homepage = this.peliculaFormulario.value.website;
    this.pelicula.release_date = this.peliculaFormulario.value.fechaEstreno;

    this.servicioService.modificarPeliculaS(this.pelicula).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Ha modificado la pelicula: \n'+this.peliculaFormulario.value.titulo,
        confirmButtonText: 'Aceptar',
      });

      this.enrutador.navigate(["inicio"]);
    });

    
  }
}
