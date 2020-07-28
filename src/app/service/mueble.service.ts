
import { Mueble } from '../models/Mueble';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
export class MuebleService{
  selectMueble: Mueble;
  muebles: Mueble[];
  mueblesList: AngularFireList<any>;
  //private firebase:AngularFireDatabase;
  constructor(/*public datos: AngularFireDatabase*/){
    //this.selectMueble = new Mueble();
    this.muebles=[];
  //  private firebase:AngularFireDatabase;
  }

  addMueble(mueble:Mueble){
    this.muebles.push(mueble);
    this.mueblesList.push({
        descri:mueble.descri,
        imagen:mueble.imagen,
        $nombre:mueble.$nombre,
        precio:mueble.precio
    });
  }
updateMueble(mueble:Mueble){
  this.mueblesList.update(mueble.$nombre,{
    descri:mueble.descri,
    imagen:mueble.imagen,
    $nombre:mueble.$nombre,
    precio:mueble.precio
  });
}
  getMueble(){
    //return this.mueblesList = this.firebase.list('Mueble');
  }

  deleteMueble(llaveNombreMueble:string){
    this.mueblesList.remove(llaveNombreMueble);
  }
}
