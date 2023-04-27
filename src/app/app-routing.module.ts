import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAgregarPedidoComponent } from './formulario-agregar-pedido/formulario-agregar-pedido.component';
import { FormularioDetallesPedidoComponent } from './formulario-detalles-pedido/formulario-detalles-pedido.component';

const routes: Routes = [
  {path:"",component:FormularioAgregarPedidoComponent,children:
    [
      {path:"modificar/:id",component:FormularioDetallesPedidoComponent},
      {path:"detalle/:id", component:FormularioDetallesPedidoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
