import { Injectable } from '@angular/core';
import {Detalle} from './_modelo/detalles';
import {Pedido} from './_modelo/pedido';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  listaPedidos: Pedido[];
  listaDetalles: Detalle[];
  carrito: Detalle[];

  constructor() {
    this.listaPedidos = [];
    this.listaDetalles = [];
    this.carrito = [];
  }

  searchPedido(idPedido: number): Observable<Pedido>{
    let p = this.listaPedidos.find(p => p.idPedido == idPedido);
    return p != undefined? of(p) : of(new Pedido(0, 0, '', '','')); //Ternario
  }

  searchDetalle(idPedido: number): Observable<Detalle>{
    let d = this.listaDetalles.find(d => d.idPedido == idPedido);
    return d != undefined? of(d) : of(new Detalle(0, 0, 0)); //Ternario
  }

  addPedido(p: Pedido){
    this.listaPedidos.push(p);
  }

  addCarrito(d: Detalle){
    this.carrito.push(d);
  }

  addDetalle(){
    for(let i=0; i<this.carrito.length; i++){
      this.listaDetalles.push(this.carrito[i]);
    }
    this.carrito = [];
  }

  mostrarPedido(){
    return this.listaPedidos;
  }

  mostrarDetalle(){
    return this.listaDetalles;
  }

  generateId(): number{
    return this.listaPedidos.length == 0 ? 1 : this.listaPedidos[this.listaPedidos.length-1].idPedido+1;
  }
}
