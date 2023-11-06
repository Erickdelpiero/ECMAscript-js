function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it= iterate(['Erick', 'Piero', 'Daniel', 'Pedro', 'Karina']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);