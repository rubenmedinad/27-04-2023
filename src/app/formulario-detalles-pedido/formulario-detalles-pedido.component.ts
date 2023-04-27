import { Component } from '@angular/core';
import { pedidos } from '../_models/pedidos';
import { productos } from '../_models/detalles';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-detalles-pedido',
  templateUrl: './formulario-detalles-pedido.component.html',
  styleUrls: ['./formulario-detalles-pedido.component.css'],
})
export class FormularioDetallesPedidoComponent {

  productoFormulario:FormGroup = new FormGroup ({
    idProducto : new FormControl(0),
    cantidad : new FormControl(0),
  })

  pedidoID:number=0
  productos:productos[]=[]



  constructor(
    private pedidosS:PedidosService,
    private activarrutas: ActivatedRoute,
    private rutes: Router
  ) {}

  ngOnInit(){
    this.activarrutas.params.subscribe(data => {
      this.pedidoID = data['id'];
    })
    this.pedidosS.getProductosAux().subscribe(data => {
      this.productos=data
    })
  }

  anadir(){
    const producto1:productos = new productos(
      this.pedidoID,
      this.productoFormulario.value.idProducto,
      this.productoFormulario.value.cantidad,
    )
    this.pedidosS.agregarProductos(producto1)
    console.log(producto1)
  }
  eliminar(n:number){
    this.pedidosS.eliminarDeCarritos(n)
  }

}
