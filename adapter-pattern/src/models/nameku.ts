import { Guerrero } from '../interfaces/guerrero.interface';

export class Nameku implements Guerrero {
  public ATAQUE_BASE = 50;
  public ataque(): number {
    return Math.random() * 50 + this.ATAQUE_BASE;
  }
}
