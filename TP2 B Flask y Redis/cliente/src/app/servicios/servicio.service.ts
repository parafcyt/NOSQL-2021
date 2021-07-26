import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlServidor: string ="http://localhost:5000/"

  constructor(private httpClient:HttpClient) { }

  inicializarS(cantTickets:string){
    return this.httpClient.get(this.urlServidor+'inicializar/'+cantTickets)
  }


  listarDisponiblesS(){
    return this.httpClient.get(this.urlServidor+'listar/disponibles')
  }

  listarReservadosS(){
    return this.httpClient.get(this.urlServidor+'listar/reservados')
  }

  listarCompradosS(){
    return this.httpClient.get(this.urlServidor+'listar/comprados')
  }

  reservarTicketS(nroTicket:string){
    return this.httpClient.get(this.urlServidor+'reservar/'+nroTicket)

  }

  comprarTicketS(nroTicket:string){
    return this.httpClient.get(this.urlServidor+'comprar/'+nroTicket)
  }


}
