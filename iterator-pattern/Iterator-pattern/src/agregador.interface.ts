import { Iterador } from './iterador.interface';

export interface Agregador {
  getIterador(): Iterador<string>;  
}
