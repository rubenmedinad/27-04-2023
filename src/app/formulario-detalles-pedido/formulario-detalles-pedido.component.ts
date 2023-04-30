import { Component } from '@angular/core';
import { Detalle } from '../_modelo/detalles';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-detalles-pedido',
  templateUrl: './formulario-detalles-pedido.component.html',
  styleUrls: ['./formulario-detalles-pedido.component.css'],
})
export class FormularioDetallesPedidoComponent {
  form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, public pedidosService: PedidosService){
    this.form = new FormGroup({
      id_producto: new FormControl(''),
      cantidad: new FormControl('')
    })
  }

  addDetalle(){ //agrega un detalle al carrito
    this.pedidosService.addCarrito(
    new Detalle(
        this.route.snapshot.params['id'],
        this.form.value.idProducto,
        this.form.value.cantidad
      ));
    this.reset();
  }

  reset(){ //limpia los campos
    this.form.get('id_producto')?.setValue('');
    this.form.get('cantidad')?.setValue('');
  }
}
