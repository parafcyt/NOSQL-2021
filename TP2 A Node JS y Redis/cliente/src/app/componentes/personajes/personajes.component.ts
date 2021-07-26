import { Component, OnInit } from '@angular/core';


//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

//PARA RUTA ACTIVA
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  episodio:String="";
  personajes :any;
  nombrePersonaje: string = "";


  constructor(private servicio:ServicioService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //me traigo el id de la ruta actual
    this.episodio=this.route.snapshot.paramMap.get("id");
    console.log(this.episodio);
    this.listarPersonajesF();
    
  }

  listarPersonajesF(){
    this.servicio.listarPersonajesS(this.episodio).subscribe(res=>{
      console.log(res);
      this.personajes=res;
      
    });
  }

  agregarPersonajesF():void{
    console.log(this.nombrePersonaje);
    this.servicio.agregarPersonajeS(this.nombrePersonaje,this.episodio).subscribe(res=>{
      console.log(res);
      this.listarPersonajesF();
      this.nombrePersonaje = "";
    });
    
  }

  eliminarPersonajeF(personaje:String){
    this.servicio.eliminarPersonajeS(personaje, this.episodio).subscribe(res=>{
      console.log(res);
      this.listarPersonajesF();
    });
  
  }


}
