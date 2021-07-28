import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url: string = "http://localhost:3000/api/";

  constructor(private httpCliente:HttpClient) { }

  iniciarBBDDS(){
    return this.httpCliente.get(this.url+'inicializar');
  }

  porRubroEnRadioS(datos:any){
    //necesito pasar un body con rubro,radio,lat y long, por eso hace peticion POST
    return this.httpCliente.post<string[]>(this.url+'por-rubro-en-radio',datos);   
  }

  distANegocioS(datos:any){
    //necesito pasar de parametro: ubicacion y un negocio de un rubro, por eso hace peticion POST
    return this.httpCliente.post<string[]>(this.url+'dist-a-negocio',datos);    
  }

}
