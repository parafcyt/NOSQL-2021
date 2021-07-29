import { Component } from '@angular/core';
import { ServicioService } from "./servicio/servicio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  monedas:any;
  limiteDocumentos:string='10';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.traerDeMongoF();
  }

  constructor(private servicioService:ServicioService){}


  traerDeMongoF(){
    this.servicioService.traerDeMongoS(this.limiteDocumentos).subscribe(res=>{
      console.log(res);
      
      this.monedas=res;
    });

  }
}

