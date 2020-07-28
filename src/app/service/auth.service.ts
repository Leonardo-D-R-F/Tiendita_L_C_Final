import { Injectable } from '@angular/core';
import { auth } from "firebase/app";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { first } from "rxjs/operators";
import { Http } from '@angular/http';
import { Articulo } from '../modelo/articulo';
import { formatNumber } from '@angular/common';

@Injectable()
export class AuthService {

  public user:User;
  carga_sobre_nosotro:boolean= false;

  items:any[] = [];
  items2:any[] = [];
  items3:any[] = [];

  constructor( public afAuth: AngularFireAuth,public http:Http) {
    this.carga_sobre_nosotros();
   }

//recuperar de mi base de dattos
  public carga_sobre_nosotros(){
    this.http.get("https://tienda-31379.firebaseio.com/items.json")
    .subscribe (data => {
      console.log(data.json());
      
      this.carga_sobre_nosotro = true;
      this.items = data.json();
    });
    this.http.get("https://tienda-31379.firebaseio.com/items2.json")
    .subscribe (data => {
      console.log(data.json());
      
      this.carga_sobre_nosotro = true;
      this.items2 = data.json();
    });
    this.http.get("https://tienda-31379.firebaseio.com/items3.json")
    .subscribe (data => {
      console.log(data.json());
      
      this.carga_sobre_nosotro = true;
      this.items3 = data.json();
    });
  }
}
