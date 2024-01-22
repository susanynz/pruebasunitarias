const calcFactorial = require('./factorial.js');

test('Calcula el factorial correctamente', () => {
  expect(calcFactorial(3)).toBe(6);
  expect(calcFactorial(5)).toBe(120);
  expect(calcFactorial(6)).toBe(720);
});