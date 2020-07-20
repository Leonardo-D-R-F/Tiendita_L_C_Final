import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebita';
  conVerMas = 0;

  clickVerMas(){
    this.conVerMas++;
  alert("Precinando Ver Mas");
  console.log(this.conVerMas);
  }

}
