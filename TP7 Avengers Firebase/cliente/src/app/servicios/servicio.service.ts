import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlApi: string = "http://localhost:5000";

  public urlPosters: string = "https://image.tmdb.org/t/p/w500";

  public urlBuscar: string = "https://api.themoviedb.org/3/search/movie?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es&query=";

  constructor(private httpCliente:HttpClient) { }

  //RECARGAR LA BBDD
  inicializarS(){
    return this.httpCliente.get(this.urlApi+"/inicializar");
  }

  listarPeliculasS(){
    return this.httpCliente.get(this.urlApi+"/listarpeliculas");
  }

  modificarPeliculaS(pelicula:any){
    return this.httpCliente.put(this.urlApi+"/modificarpelicula",pelicula);
  }

  eliminarPeliculaS(id:number){
    return this.httpCliente.delete(this.urlApi+"/eliminarpelicula/"+id);
  }

  buscarPeliculaS(nombre:string){
    return this.httpCliente.get(this.urlBuscar+nombre);
  }

  cargarPeliculaS(id:number){
    return this.httpCliente.get(this.urlApi+"/cargarpelicula/"+id);
  }


  //FUNCIONES PERSONAJE

  listarPersonajesS(){
    return this.httpCliente.get(this.urlApi+"/listarpersonajes");
  }

  traerPersonajeS(id:number){
    return this.httpCliente.get(this.urlApi+"/personaje/"+id);
  }

  modificarPersonajeS(datos:any){
    return this.httpCliente.put(this.urlApi+"/personaje/"+datos.id, datos);
  }
  eliminarPersonajeS(id:number){
    return this.httpCliente.delete(this.urlApi+"/personaje/"+id);
  }

  agregarPersonajeS(dato:any){
    return this.httpCliente.post(this.urlApi+"/agregarpersonaje",dato);
  }

}
