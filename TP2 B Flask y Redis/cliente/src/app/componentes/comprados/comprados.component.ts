import { Component, OnInit } from '@angular/core';

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

@Component({
  selector: 'app-comprados',
  templateUrl: './comprados.component.html',
  styleUrls: ['./comprados.component.css']
})
export class CompradosComponent implements OnInit {

  ticketsComprados:any;

  constructor(private servicioService:ServicioService) { }

  ngOnInit(): void {
    this.listarCompradosF();
  }

  listarCompradosF(){
    this.servicioService.listarCompradosS().subscribe(res=>{
      this.ticketsComprados=res;

    });
  }


}
