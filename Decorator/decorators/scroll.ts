export function setScroll(constructorFunction: Function) {
    console.log('-- El decorador de Scroll --');
    constructorFunction.prototype.setScroll = true;
}