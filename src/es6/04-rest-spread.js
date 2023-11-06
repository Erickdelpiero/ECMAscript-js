// Arrays destructuring
const Frutas= ['Manzana', 'Platano'];
let [a,b]= Frutas;
console.log(`Yo como mucha ${a}, pero me gusta más el ${b}, gracias.`)
console.log(Frutas[0]);


// Object destructuring
const Usuarios= {
    name: 'Erick',
    age: 24
}
let {name, age}=Usuarios;
console.log(name, age);
console.log(Usuarios.name, Usuarios.age);



//spread operator
let country= 'Pe';
let id= 1;
let NewUsuario= {id, ...Usuarios, country}; //Descompone el objeto Usuarios para poder unirlo con Country
console.log(NewUsuario);



//rest
function suma(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[1];
}

suma(2,1,2,3);