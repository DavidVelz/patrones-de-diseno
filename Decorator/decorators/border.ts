export function setBorder(constructorFunction: Function) {
    console.log('-- El decorador de borde --');
    constructorFunction.prototype.setBorder = true;
}