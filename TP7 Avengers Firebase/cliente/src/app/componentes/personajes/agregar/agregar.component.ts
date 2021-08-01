import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  personajeFormulario:FormGroup;

  constructor(private enrutador:Router, private servicioService:ServicioService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.personajeFormulario=this.formBuilder.group({
      name: ['', Validators.required],
      hero: ['', Validators.required],
      url: ['', Validators.required],
      historia: ['', Validators.required],
      peliculasAparece: ['', Validators.required],
    })
  }

  agregarPersonajeF(){

    this.servicioService.listarPersonajesS().subscribe((res:any[])=>{

      let personajeAgregar={
        id: res.length,
        hero: this.personajeFormulario.value.hero , 
        peliculas: this.personajeFormulario.value.peliculasAparece.split(",") , 
        name: this.personajeFormulario.value.name , 
        historia: this.personajeFormulario.value.historia , 
        img: this.personajeFormulario.value.url 
      }

      this.servicioService.agregarPersonajeS(personajeAgregar).subscribe(res=>{
        Swal.fire({
          icon: 'success',
          title: 'Ha agregado el personaje: \n'+this.personajeFormulario.value.hero,
          confirmButtonText: 'Aceptar',
        });
  
        this.enrutador.navigate(["personajes"]);
      });

    });
  }

}
