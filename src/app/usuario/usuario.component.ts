import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../models/Usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:Usuario[];
  //nombre:string;
  //email::string;

  constructor(
    public userService: UsuarioService
  ){}
  ngOnInit(){
    this.usuarios = this.userService.getUsuarios();
    console.log(this.usuarios);
  }
  eliminarUsuario(elim:Usuario){
    if (confirm('Estas seguro de eliminar Cliente')) {
      this.userService.deleteUsuario(elim);
    }
  }
}
