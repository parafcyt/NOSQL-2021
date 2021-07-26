import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlApi = "http://localhost:3000/api/"

  constructor(private httpCliente: HttpClient) { }


  //LISTAR PERSONAJES X EPISODIO, paso un episodio

  listarPersonajesS (episodio: String){
    return this.httpCliente.get(this.urlApi+"listarpersonajes/"+episodio)
  }


  //AGREGAR PERSONAJE A EPISODIO, paso personaje y episodio

  agregarPersonajeS(personaje:String, episodio:String){
    return this.httpCliente.post(this.urlApi+`agregarpersonaje/${episodio}/${personaje}`,{})//espera un JSON
  }



  //ELIMINAR PERSONAJE DE EPISODIO, paso personaje y episodio

  eliminarPersonajeS(personaje:String, episodio:String){
    return this.httpCliente.delete(this.urlApi+`eliminarpersonaje/${episodio}/${personaje}`)
  }


}
