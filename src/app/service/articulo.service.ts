import { Injectable } from '@angular/core';
import  { Articulo } from '../modelo/articulo';
//import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  selectedArticulo: Articulo = new Articulo();
  articuloList: AngularFireList<any>;
  

  constructor(private firebase: AngularFireDatabase) { }
  
  getArticulo(){
    return this.articuloList =this.firebase.list('items');
    
  }
  insertArticulo(articulo: Articulo){
    this.articuloList.push({
      num_identificacion:articulo.num_identificacion,
      Descripcion: articulo.Descripción,
      Nombre: articulo.Nombre,
      Precio: articulo.Precio,
      Imagen: articulo.Imagen

    });
  }
  updateArticulo(articulo: Articulo){
    this.articuloList.update(articulo.$keyRegistro, {
      num_identificacion:articulo.num_identificacion,
      Descripcion: articulo.Descripción,
      Nombre: articulo.Nombre,
      Precio: articulo.Precio,
      Imagen: articulo.Imagen
    });
  }
  deleteArticulo($keyRegistro: string){
    this.articuloList.remove($keyRegistro);
  }
}
