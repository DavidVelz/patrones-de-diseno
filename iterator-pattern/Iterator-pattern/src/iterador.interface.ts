export interface Iterador<T> {  
  actual(): T;
  siguiente (): T;  
  existeElementos(): boolean;
}
