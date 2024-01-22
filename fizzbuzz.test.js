const fizzBuzz =require('./fizzBuzz.js')

test('Número no divisible entre 3 ni 5 debería devolver el mismo número', () => {
  expect(fizzBuzz(7)).toBe(7);
});

// Prueba para números divisibles entre 3
test('Número divisible entre 3 debería devolver "Fizz"', () => {
  expect(fizzBuzz(12)).toBe('Fizz');
});

// Prueba para números divisibles entre 5
test('Número divisible entre 5 debería devolver "Buzz"', () => {
  expect(fizzBuzz(500)).toBe('Buzz');
});

// Prueba para números divisibles entre 3 y 5
test('Número divisible entre 3 y 5 debería devolver "FizzBuzz"', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});

