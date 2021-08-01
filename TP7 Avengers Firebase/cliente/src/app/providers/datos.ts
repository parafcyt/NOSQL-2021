import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class Datos {
    
    private peliculaAmodificar: any;

    private personajeAmodificar:any;


    almacenarPelicula(pelicula:any){
        this.peliculaAmodificar=pelicula;
    }

    obtenerPelicula(){
        return this.peliculaAmodificar;
    }

    almacenarPersonaje(personaje:any){
        this.personajeAmodificar=personaje;
    }

    obtenerPersonaje(){
        return this.personajeAmodificar;
    }





}
