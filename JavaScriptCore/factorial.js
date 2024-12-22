// Create a function expression that calculates the factorial of a given number.

const factorial = function(n){
    if (n==0){
        return 1;
    }else{
        return n * factorial(n - 1)
    }
};

console.log(factorial(5));