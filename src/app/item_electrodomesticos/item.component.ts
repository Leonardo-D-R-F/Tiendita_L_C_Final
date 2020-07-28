import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
declare var $:any;
@Component({
  selector: 'app-item-electrodomesticos',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class Item_E_Component implements OnInit {
  nombre: string= '_is.items3';
  constructor(public _is: AuthService) { }

  ngOnInit() {
  }

}
