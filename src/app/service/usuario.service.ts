//import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario'
/*@Injectable({
  provideIn: 'root'
})*/
export class UsuarioService{
  usuarios: Usuario[];
  constructor(){
    this.usuarios=[
      //    {nombre:'Christian',email:'chris.@gmail.com',pass:'123',hide:true},
      //   {nombre:'Leonardo',email:'leo.@gmail.com',pass:'456',hide:true}
  ];
  }
  getUsuarios(){
    if(localStorage.getItem('usuarios') === null) {//si esta vacio
      return this.usuarios;                        // return vacio
    }else{
      this.usuarios = JSON.parse(localStorage.getItem('usuarios')); //lo asigna y lo convierte en arreglo
      return this.usuarios;
    }
  }
  //AGREGAMOS Usuarios A LOCAL STORAGE
  addUsuarios(usuario:Usuario){
    this.usuarios.push(usuario);
    let usuarios:Usuario[] = [];
    if (localStorage.getItem('usuarios') === null) {
      usuarios.push(usuario);
      localStorage.setItem('usuarios',JSON.stringify(usuarios));//llevamos a cadena la lista de usuarios con JSON
    }else{
      usuarios = JSON.parse(localStorage.getItem('usuarios'));//llevamos aun objeto o aun arreglo
      usuarios.push(usuario);
      localStorage.setItem('usuarios',JSON.stringify(usuarios));
    }
  }

  deleteUsuario(usuario:Usuario){
    for (let i = 0; i < this.usuarios.length; i++) {
      if (usuario == this.usuarios[i]) {
        this.usuarios.splice(i, 1);
        localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
      }
    }
  }
}
