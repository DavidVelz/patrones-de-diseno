import { Guerrero } from '../interfaces/guerrero.interface';

export class Sayayin implements Guerrero {
  public ATAQUE_BASE = 100;
  public ataque(): number {
    return Math.random() * 100 + this.ATAQUE_BASE;
  }
}
