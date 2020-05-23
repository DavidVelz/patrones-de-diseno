import { setBorder } from "./decorators/border";
import { setScroll } from "./decorators/scroll";



@setBorder
@setScroll
class listview {

    private _numItems  : any; 
    constructor(numItems:any){
        this._numItems = numItems;
        console.log('-- Constructor del Listview --');
    }    
}

let list1: listview = new listview("Soy el 1r listview");
console.log(list1);

