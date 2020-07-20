import { Injectable } from '@angular/core';
import { auth } from "firebase/app";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { first } from "rxjs/operators";
import { Http } from '@angular/http'

@Injectable()
export class AuthService {

  public user:User;
  carga_sobre_nosotro:boolean= false;

  items:any[] = [];

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
  }
}
