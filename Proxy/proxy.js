var filtro = {
    set: function(obj, prop, value){
        if(prop === 'salario'){
            if(!Number.isInteger(value)){
                throw new TypeError('Su salario no es un valor numerico entero');
            }
            if(value < 50){
                throw new RangeError('Su salario es incorrecto, por favor revise');
            }
        }
        obj[prop] = value;
    }
};

var person = new Proxy({}, filtro);
person.salario = 1200000;
console.log('Su salario actual es : '+person.salario);
person.salario = 'a';