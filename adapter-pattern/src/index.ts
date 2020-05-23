import { Sayayin } from './models/Sayayin';
import { Nameku } from './models/nameku';
import { Android } from './models/android';
import { AndroidAdapter } from './models/android-adapter';


const goku = new Sayayin();
const vegeta = new Sayayin();
const picoro = new Nameku();
const C18 = new AndroidAdapter(new Android());
const C19 = new AndroidAdapter(new Android());

console.log(`Goku tiene un ataque de: ${goku.ataque()}`);
console.log(`Vegeta tiene un ataque de: ${vegeta.ataque()}`);
console.log(`Picoro tiene un ataque de: ${picoro.ataque()}`);
console.log(`C18 tiene un ataque de: ${C18.ataque()}`);
console.log(`C19 tiene un ataque de: ${C19.ataque()}`);
