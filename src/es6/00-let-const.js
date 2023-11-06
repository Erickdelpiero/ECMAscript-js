// Trabajando tradicionalmente con "var"
var lastName= 'Gonzales';
lastName= 'Requejo';
console.log(lastName);


//Trabajando con el nuevo cambio de es6 (let)
let fruit= "apple";
fruit= "banana";
console.log(fruit);


//Trabajando con el nuevo cambio de es6 (const)
const animal= "horse";
animal= "dog";
console.log(animal);


//Trabajando con el scope
const fruits = () => {              //Arrow function: otra manera de declarar una función
    if(true){
        var fruta1=     "Platano";  // function scope:  Declaración general
        let fruta2=     "Manzana";  // block scope:     Declaración local
        const fruta3=   "Papaya";   // block scope:     Declaración local
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

fruits();