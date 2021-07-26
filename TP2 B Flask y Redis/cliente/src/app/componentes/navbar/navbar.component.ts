import { Component, OnInit } from '@angular/core';

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cantTickets:string;

  constructor(private servicioService:ServicioService) { }



  ngOnInit(): void {
  }

  inicializarF(){
    if (Number(this.cantTickets)>0){
      this.servicioService.inicializarS(this.cantTickets).subscribe(res=>{
        console.log(res);
        this.cantTickets=""
      })
    }    
  }





}
