import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class Datos {
    
    private peliculaAmodificar: any;


    almacenarPelicula(pelicula:any){
        this.peliculaAmodificar=pelicula;
    }

    obtenerPelicula(){
        return this.peliculaAmodificar;
    }
}
