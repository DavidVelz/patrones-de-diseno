"use strict";
exports.__esModule = true;
exports.setScroll = void 0;
function setScroll(constructorFunction) {
    console.log('-- El decorador de Scroll --');
    constructorFunction.prototype.setScroll = true;
}
exports.setScroll = setScroll;
