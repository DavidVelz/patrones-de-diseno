import { LetrasColecion } from './letras-coleccion';

const coleccion = new LetrasColecion();
coleccion.agregarItem('A');
coleccion.agregarItem('B');
coleccion.agregarItem('C');


const iterador = coleccion.getIterador();

console.log('Lista de elementos:');
while (!iterador.existeElementos()) {
  console.log(iterador.siguiente());
}

