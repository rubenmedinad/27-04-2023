export class Detalle{
  private _idPedido: number;
  private _idProducto: number;
  private _cantidad: number;

  constructor(idPedido: number, idProducto: number, cantidad: number){
      this._idPedido = idPedido;
      this._idProducto = idProducto;
      this._cantidad = cantidad;
  }

  public get idPedido(): number {
      return this._idPedido;
  }

  public set idPedido(value: number) {
      this._idPedido = value;
  }

  public get idProducto(): number {
      return this._idProducto;
  }

  public set idProducto(value: number) {
      this._idProducto = value;
  }

  public get cantidad(): number {
      return this._cantidad;
  }

  public set cantidad(value: number) {
      this._cantidad = value;
  }
}
