import { Component, OnInit } from '@angular/core';

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {

  ticketsDisponibles:any;

  constructor(private servicioService :ServicioService) { }

  ngOnInit(): void {
    this.listarDisponiblesF();
  }

  listarDisponiblesF(){
    this.servicioService.listarDisponiblesS().subscribe(res=>{
      this.ticketsDisponibles=res;

    });
  }

  reservarTicketF(nroTicket:string){
    this.servicioService.reservarTicketS(nroTicket).subscribe(res=>{
      this.listarDisponiblesF();
      alert(res);
    });
  }

}
