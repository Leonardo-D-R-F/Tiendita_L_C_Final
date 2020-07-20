import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';

import { Item_E_Component } from './item_electrodomesticos/item.component';
import { Item_H_Component } from './item_herramientas/item.component';
import { Item_M_Component } from './item_muebles/item.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
const appRoutes: Routes = [
  {path:'productos',component: ProductosComponent },
  {path:'registros',component: RegisterComponent },
  {path:'electrodomesticos',component: Item_E_Component },
  {path:'herramientas',component: Item_H_Component },
  {path:'muebles',component: Item_M_Component },
  {path:'login',component: LoginComponent },
  {path:'inicio',component: InicioComponent },
  {path:'carrito',component: CarritoComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
