const fnAsinc= () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=>resolve('AsynC'),5000)
        : reject(new Error('Error!'));
    })
}

const anotherFn = async() => {
    const something= await fnAsinc();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');