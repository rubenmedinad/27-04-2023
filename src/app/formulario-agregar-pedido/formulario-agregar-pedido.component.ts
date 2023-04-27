import { Component } from '@angular/core';
import { pedidos } from '../_models/pedidos';
import { productos } from '../_models/detalles';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar-pedido',
  templateUrl: './formulario-agregar-pedido.component.html',
  styleUrls: ['./formulario-agregar-pedido.component.css']
})
export class FormularioAgregarPedidoComponent {
  pedidos:pedidos[]=[]
  productos:productos[]=[]
  pedidosFormulario:FormGroup
  pedidoAux:pedidos= new pedidos(0,"","")
  constructor(
    private pedidosS:PedidosService,
    private activarrutas: ActivatedRoute,
    private rutes: Router
  ) {
    this.pedidosFormulario = new FormGroup ({
      idPedido : new FormControl({value:this.pedidoAux.idPedido, disabled:true }),
      idCliente : new FormControl(0),
      formaPago : new FormControl (''),
      direccionEntrega : new FormControl('')
    })
  }

  ngOnInit(){
    this.pedidosS.getPedidos().subscribe(data => {
      this.pedidos=data
    })
    this.pedidosS.getProductos().subscribe(data => {
      this.productos=data
    })
  }
  agregar(){
    this.pedidoAux.idCliente = this.pedidosFormulario.value.idCliente,
    this.pedidoAux.formaPago =  this.pedidosFormulario.value.formaPago,
    this.pedidoAux.direccionEntrega =  this.pedidosFormulario.value.direccionEntrega,

    this.pedidosS.agregarPedido(this.pedidoAux)
    this.rutes.navigate([''])
    this.pedidoAux = new pedidos(0,"","")
    this.pedidosFormulario.reset()
  }

}
