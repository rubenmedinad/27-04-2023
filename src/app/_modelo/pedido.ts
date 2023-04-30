export class Pedido{
  private _idPedido: number;
  private _idCliente: number;
  private _nombreCliente: string;
  private _formaPago: string;
  private _direccionEntrega: string;

  constructor(idPedido: number, idCliente: number, nombreCliente: string, formaPago: string, direccionEntrega: string){
      this._idPedido = idPedido;
      this._idCliente = idCliente;
      this._nombreCliente = nombreCliente;
      this._formaPago = formaPago;
      this._direccionEntrega = direccionEntrega;
  }

  public get idPedido(): number {
      return this._idPedido;
  }

  public set idPedido(value: number) {
      this._idPedido = value;
  }

  public get idCliente(): number {
      return this._idCliente;
  }

  public set idCliente(value: number) {
      this._idCliente = value;
  }

  public get nombreCliente(): string {
      return this._nombreCliente;
  }

  public set nombreCliente(value: string) {
      this._nombreCliente = value;
  }

  public get formaPago(): string {
      return this._formaPago;
  }

  public set formaPago(value: string) {
      this._formaPago = value;
  }

  public get direccionEntrega(): string {
      return this._direccionEntrega;
  }

  public set direccionEntrega(value: string) {
      this._direccionEntrega = value;
  }
}
