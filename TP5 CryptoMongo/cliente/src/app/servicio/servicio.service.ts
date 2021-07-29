import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  // Actualizar la IP, con el valor que muestraal ejecutar el contenedor: crypto-api
  private urlApi: string = "http://172.17.0.3:5000/cryptomonedas/";

  constructor(private httpCliente:HttpClient) { }

  traerDeMongoS(limiteDocumentos:string){

    return this.httpCliente.get(this.urlApi+limiteDocumentos);

  }
}
