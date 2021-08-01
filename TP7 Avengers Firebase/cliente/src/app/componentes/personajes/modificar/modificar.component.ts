import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Datos } from 'src/app/providers/datos';
import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  personajeFormulario:FormGroup;

  constructor(private enrutador:Router, private servicioService:ServicioService, private formBuilder:FormBuilder, private datos:Datos) { }

  ngOnInit(): void {

    const personaje=this.datos.obtenerPersonaje();

    this.personajeFormulario=this.formBuilder.group({
      name: [personaje.name, Validators.required],
      hero: [personaje.hero, Validators.required],
      img: [personaje.img, Validators.required],
      historia: [personaje.historia, Validators.required],
      peliculas: [personaje.peliculas.toString(), Validators.required],
      id: [personaje.id]

    })
  }

  modificarPersonajeF(){
    let personaje=this.personajeFormulario.value;

    personaje.peliculas=personaje.peliculas.split(",");

    this.servicioService.modificarPersonajeS(personaje).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Ha modificado el personaje: \n'+personaje.hero,
        confirmButtonText: 'Aceptar',
      });

      this.enrutador.navigate(["personajes"]);
    });
  }
}
