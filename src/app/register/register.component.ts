import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contador_de_clicks = 0;
  constructor(public user: UsuarioService) {
  }
  ngOnInit() {
  }
  addUsuario(newName: HTMLInputElement, newEmail: HTMLInputElement, newPass: HTMLInputElement){
    console.log("AGREGANDO USUARIO....");
    this.user.addUsuarios({
      nombre: newName.value,
      email: newEmail.value,
      pass: newPass.value,
      hide: true
    });
    console.log(this.user);
    newName.value="";
    newEmail.value="";
    newPass.value="";
    newName.focus();
  }
  mostrar(){
    console.log('hola');
  }
}
