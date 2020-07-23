import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { Item_E_Component } from './item_electrodomesticos/item.component';
import { Item_H_Component } from './item_herramientas/item.component';
import { Item_M_Component } from './item_muebles/item.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';

import { UsuarioService } from './service/usuario.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpModule } from '@angular/http'

import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import{AuthService} from '../app/service/auth.service'
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';

import {FormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    Item_E_Component,
    Item_H_Component,
    Item_M_Component,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    CarritoComponent,
    ProductosComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    routing

  ],
  providers: [
    appRoutingProviders,
    AuthService,
    UsuarioService
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
