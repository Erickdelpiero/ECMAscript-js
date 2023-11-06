// Cras una clase con el nombre que gustes (efecto)
class efecto{
    //Creas un método que realice cierta acción
    ver(){
        return "Se ejecutó ver()";
    }

    mirar(d){
        return `Se ejecutó mirar(${d})`;
    }
}

let x= new efecto();    //Defines una variable a la que le quieres aplicar alguno de los métodos de "efecto", como por ejemplo "ver"
y= x.ver();
z= x.mirar(9);
console.log(`Este es el valor de y: ${y}
y este es el valor de z: ${z}`);


let a= new efecto();
b= a.mirar(5);
console.log(`Este es el valor de b: ${b}`);



// En el caso del constructor no necesito llamar el "método" para que se ejecute
class function2{
    M1(){
        console.log('Soy M1');
    }
    constructor(){
        console.log('El constructor se ejecutó');
    }
}

let variando= new function2();
console.log(typeof(variando));


//This
class Usuario{
    constructor(name){
        this.name=name;
    }
    //Métodos
    speak(){
        return 'Hola, ¿Cómo estás'
    }
    greeting(){
        return `${this.speak()} ${this.name}?, te damos la bienvenida.`
    }
}

const Saludo= new Usuario('Erick');
console.log(Saludo.greeting());


//Get y Set
class Usuariof{
    constructor(nombre,edad){
        this.name= nombre;
        this.age= edad;
    }
    //Métodos
    speak(){
        return 'Hola, ¿Cómo estás'
    }
    greeting(){
        return `${this.speak()} ${this.name}?, te damos la bienvenida.`
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}

const Saludo2= new Usuariof('Erick', 24);
console.log(Saludo2.uAge);
console.log(Saludo2.uAge =20);