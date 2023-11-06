function newUser(nombre, edad, pais){
    var Name= nombre || 'Erick';
    var Age= edad || 24;
    var Country= pais || 'PE';
    console.log(Name, Age, Country);
}
newUser();
newUser('Piero', 19, 'MX');


function NewUser(nombre='Erick', edad=24, pais='PE'){
    console.log(nombre,edad,pais);
}
NewUser();
NewUser('Ana', 22, 'CO');