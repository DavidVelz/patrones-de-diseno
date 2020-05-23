import { Guerrero } from '../interfaces/guerrero.interface';
import { Android } from './android';

export class AndroidAdapter implements Guerrero {
  constructor(private android: Android) {}
  public ATAQUE_BASE = 60;
  public ataque(): number {
    return this.android.energia() + this.android.golpe() + this.ATAQUE_BASE;
  }
}
