import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
declare var $:any;
@Component({
  selector: 'app-item-muebles',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class Item_M_Component implements OnInit {
  nombre: string= '_is.items';
  constructor(public _is: AuthService) { }

  ngOnInit() {
  }

}
