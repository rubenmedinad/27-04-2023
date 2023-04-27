import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioDetallesPedidoComponent } from './formulario-detalles-pedido/formulario-detalles-pedido.component';
import { FormularioAgregarPedidoComponent } from './formulario-agregar-pedido/formulario-agregar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioDetallesPedidoComponent,
    FormularioAgregarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
