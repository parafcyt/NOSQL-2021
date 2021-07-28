import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//SERVICIO
import { ServicioService } from "./servicios/servicio.service";

export interface Ubicacion {
  latitud :number;
  longitud:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ubicacionActual:Ubicacion;

  //si elegi en el radioButton la UADER
  ubicacionUader :boolean =true;

  //para recorrer por rubro
  rubros: string[] = [
    'Cervecerias', 
    'Farmacias', 
    'Universidades',
    'Centro de Emergencias',
    'Supermercados'
  ];

  latitud:number;
  longitud:number;
  radio:number = 2;
  negociosEnElRadio=[];

  constructor(private servicioService:ServicioService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.elegiUader() 
  }

  elegiUader(){
    this.ubicacionUader=true;
    this.ubicacionActual = {latitud: -32.479240, longitud: -58.233421};

    //LISTO NEGOCIOS X RUBRO EN EL RADIO
    this.porRubroEnRadioF()
  }


  elegiOtro(){
    this.ubicacionActual.latitud=this.latitud;
    this.ubicacionActual.longitud=this.longitud;

    //LISTO NEGOCIOS X RUBRO EN EL RADIO
    this.porRubroEnRadioF()
  }

  porRubroEnRadioF(){
    this.negociosEnElRadio=[];

    //armo una constante con los datos para pasar al servicio
    const datos:any ={
      latitud: this.ubicacionActual.latitud,
      longitud: this.ubicacionActual.longitud,
      km:this.radio,
      rubro:''
    }

    console.log(datos);
    

    //recorro por cada rubro los negocios
    this.rubros.forEach(rubro=>{
      datos.rubro=rubro;
      this.servicioService.porRubroEnRadioS(datos).subscribe(res=>{
        res.forEach(negocio=>{
          if (this.elegiUader && negocio==="Universidad Autónoma de Entre Ríos FCYT") {
            //para que no busque distancia a si mismo
          } else {
            this.negociosEnElRadio.push({nombre:negocio,rubro:rubro});
          }
          
        });
        // this.negociosEnElRadio.push(res);
          // if (this.elegiUader) {
          //   this.negociosEnElRadio = this.negociosEnElRadio.filter(negocio => negocio.nombre !== 'UADER')
          //}
          
          
      });
      
    });
    console.log(this.negociosEnElRadio);
  }




}
