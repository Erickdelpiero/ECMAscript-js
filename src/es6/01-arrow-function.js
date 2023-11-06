//Diferencias entre una función normal y un arrow function.
function square(x){
    return x*x;
}

const square1= (x) =>{
    return x*x;
}

const square2= (x) => x*x;

console.log(square(2));
console.log(square1(3));
console.log(square2(4));