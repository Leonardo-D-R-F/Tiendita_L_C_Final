import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contador_de_clicks = 0;
  nombre: string="";
  email: string= '';
  contrasenia: string ='';
  constructor() { }
      
  ngOnInit() {
  }
  hola(){
    //this.nombre= document.getElementById('username').value;
    //this.email= document.getElementById('email').value;
    //this.contrasenia= document.getElementById('password').value;
    this.contador_de_clicks++ ;
    console.log("HOLA");
    console.log(this.nombre);
    console.log(this.email);
    console.log(this.contrasenia);
    console.log(this.contador_de_clicks)
    
  }
}

