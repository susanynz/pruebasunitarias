//declarar la función fizzBuzz
function fizzBuzz(number) {
    //si es divisible entre 3 y 5
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
        //si solo es divisible entre 3
    } else if (number % 3 === 0) {
        return 'Fizz';
        //si solo es divisible entre 5
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

module.exports = fizzBuzz