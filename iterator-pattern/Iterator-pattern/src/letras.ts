import { Iterador } from './iterador.interface';
import { LetrasColecion } from './letras-coleccion';

export class Letras implements Iterador<string> {
  private coleccion: LetrasColecion;
  private posicion: number = 0;
  private devolver: boolean = false;

  constructor(coleccion: LetrasColecion, devolver: boolean = false) {
    this.coleccion = coleccion;
    this.devolver = devolver;

    if (devolver) {
      this.posicion = coleccion.getCantidad() - 1;
    }
  }

  public actual(): string {
    return this.coleccion.getElementos()[this.posicion];
  }

  public siguiente (): string {
    const item = this.coleccion.getElementos()[this.posicion];
    this.posicion += this.devolver ? -1 : 1;
    return item;
  }

  public existeElementos(): boolean {
    if (this.devolver) {
      return this.posicion < 0;
    }

    return this.posicion >= this.coleccion.getCantidad();
  }
}
