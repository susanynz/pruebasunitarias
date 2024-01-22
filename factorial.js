//implementa una función para calcular el factorial de un número usando recursion
function calcFactorial(numero) {
    // Caso base: factorial de 0 es 1
    if (numero === 0) {
        return 1;
    } else {
        // Caso recursivo: n! = n * (n-1)!
        return numero * calcFactorial(numero - 1);
    }
}

const numeroEjemplo = 5;
const resultadoFactorial = calcFactorial(numeroEjemplo);
console.log(`El factorial de ${numeroEjemplo} es: ${resultadoFactorial}`);

module.exports=calcFactorial
