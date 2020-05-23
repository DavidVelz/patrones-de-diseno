var Singleton = (function(){
    var instance;
    function createInstance(){
        var boletas = new Object();
        boletas.occidental = 68000;
        boletas.oriental = 39000;
        boletas.norte = 27000;
        boletas.sur = 29000;
        return boletas;
    }

    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log('Las instancias son iguales : '+(instance1 === instance2));
console.log('La boleta de Occidental cuesta : '+instance1.occidental);
