import { Agregador } from './agregador.interface';
import { Letras } from './letras';
import { Iterador } from './iterador.interface';

export class LetrasColecion implements Agregador {
  private elemento: string[] = [];

  public getElementos(): string[] {
    return this.elemento;
  }

  public getCantidad(): number {
    return this.elemento.length;
  }

  public agregarItem(elemento: string): void {
    this.elemento.push(elemento);
  }

  public getIterador(): Iterador<string> {
    return new Letras(this);
  }
}
