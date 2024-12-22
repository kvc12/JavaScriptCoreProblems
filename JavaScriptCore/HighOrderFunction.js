const applyOperation = (operation, a , b) => {
    return operation(a, b)
}

const add = (a,b) => a+b;
const substract = (a,b) => a-b;

console.log(applyOperation(add, 5, 5));
console.log(applyOperation(substract, 10, 5));