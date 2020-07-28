import { Component, OnInit } from '@angular/core';
import { Mueble } from '../models/Mueble';
import { MuebleService } from '../service/mueble.service';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  mueblesList: Mueble[];
  constructor(private muebleService: MuebleService ) {}

  ngOnInit() {
  }
  agregarProducto(newDescri: HTMLInputElement,newImagen: HTMLInputElement, newName: HTMLInputElement,newPrecio: HTMLInputElement){
    console.log("AGREGANDO Producto");
    this.muebleService.addMueble({
      descri:newDescri.value,
      imagen:newImagen.value,
      $nombre:newName.value,
      precio:newPrecio.value
    });
    console.log(this.muebleService);
    newDescri.value="";
    newImagen.value="";
    newName.value="";
    newPrecio.value="";
    newDescri.focus();

  }


}
