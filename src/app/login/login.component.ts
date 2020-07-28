import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/Usuario'
//import { auth } from 'firebase/auth'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios:Usuario[];

  constructor(public userService: UsuarioService
  ){}

  ngOnInit() {
  }
validarUsuario(nombreUser: HTMLInputElement, userPass: HTMLInputElement){
  this.usuarios = this.userService.getUsuarios();
  let name = nombreUser.value;
  let pass = userPass.value;
  if ("admi" === name && "pass" === pass) {
    alert("Bienvenido Administrador");
  }
  for (let i = 0; i < this.usuarios.length; i++) {
    if (this.usuarios[i].nombre === name && this.usuarios[i].pass ===pass) {
        alert("Usuario Correcto");
        break;
      }else{
        let a =this.usuarios.length;
        if(i===(a-1)){
          alert("Usuario Incorrecto");
        }
      }
  }
 }
}
