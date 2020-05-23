"use strict";
exports.__esModule = true;
exports.setBorder = void 0;
function setBorder(constructorFunction) {
    console.log('-- El decorador de borde --');
    constructorFunction.prototype.setBorder = true;
}
exports.setBorder = setBorder;
