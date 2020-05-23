function factorySubway(){

    this.createSubway = function(clase){
        if(clase === 'subwayCostilla'){
            return subwayCostilla();
        }else if(clase === 'subwayVegetariano'){
            return subwayVegetariano();
        }
    }

    function Subway(ing, precio){
        this.Ingredientes = ing;
        this.Precio = precio;
    }

    function subwayCostilla(){
        return new Subway(['Pan de Oregano','Costilla de Cerdo','Queso Americano','Lechuga','Tomate'], 15000);
    }

    function subwayVegetariano(){
        return new Subway(['Pan Integral','Guacamole','Queso Provolone','Lechuga','Cebolla','Aceituna'], 12700);
    }

}

var factory = new factorySubway();
var subway = factory.createSubway('subwayCostilla');
console.log(subway);