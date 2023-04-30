import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar-pedido',
  templateUrl: './formulario-agregar-pedido.component.html',
  styleUrls: ['./formulario-agregar-pedido.component.css']
})
export class FormularioAgregarPedidoComponent {
  formPedido: FormGroup;

  constructor(private router: Router, public pedidosService: PedidosService){
    this.formPedido = new FormGroup({
      idPedido: new FormControl(this.pedidosService.generateId()),
      idCliente: new FormControl(''),
      nombreCliente: new FormControl(''),
      formaPago: new FormControl(''),
      direccionEntrega: new FormControl('')
    })
  }

  goToDetalles(){
    Object.keys(this.formPedido.controls).forEach( key => this.formPedido.get(key)?.disable())
    this.router.navigate(['/detalles', this.formPedido.value.idPedido]);
  }

  addPedido(){
    this.pedidosService.addPedido(
    new Pedido(
        this.formPedido.value.idPedido,
        this.formPedido.value.idCliente,
        this.formPedido.value.nombreCliente,
        this.formPedido.value.formaPago,
        this.formPedido.value.direccionEntrega
      ));
    this.pedidosService.addDetalle();
    this.resetForm();
    Object.keys(this.formPedido.controls).forEach(key => this.formPedido.get(key)?.enable())
    this.router.navigate(['']);
  }

  resetForm(){
    this.formPedido.get('idPedido')?.setValue(this.pedidosService.generateId());
    this.formPedido.get('idCliente')?.setValue('');
    this.formPedido.get('nombreCliente')?.setValue('');
    this.formPedido.get('formaPago')?.setValue('');
    this.formPedido.get('direccionEntrega')?.setValue('');
  }
}
