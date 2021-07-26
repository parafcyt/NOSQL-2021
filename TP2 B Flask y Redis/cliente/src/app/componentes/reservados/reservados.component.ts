import { Component, OnInit } from '@angular/core';

//SERVICIO
import { ServicioService } from "../../servicios/servicio.service";

@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.component.html',
  styleUrls: ['./reservados.component.css']
})
export class ReservadosComponent implements OnInit {

  ticketsReservados:any;

  constructor(private servicioService:ServicioService) { }

  ngOnInit(): void {
    this.listarReservadosF();
  }

  listarReservadosF(){
    this.servicioService.listarReservadosS().subscribe(res=>{
      this.ticketsReservados=res;

    });
  }

  comprarTicketF(nroTicket:string){
    this.servicioService.comprarTicketS(nroTicket).subscribe(res=>{
      this.listarReservadosF();
      alert(res);
    });

  }
  

}
