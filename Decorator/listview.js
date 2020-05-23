"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var border_1 = require("./decorators/border");
var scroll_1 = require("./decorators/scroll");
var listview = /** @class */ (function () {
    function listview(color) {
        this._color = color;
        console.log('-- Constructor del Listview --');
    }
    listview = __decorate([
        border_1.setBorder,
        scroll_1.setScroll
    ], listview);
    return listview;
}());
var list1 = new listview("Soy el 1r listview");
console.log(list1);
