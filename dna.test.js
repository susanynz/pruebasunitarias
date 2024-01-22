const dnaStringFilter = require('./dna');

test('Elimina bases no canonicas', () => {
  const input1 = 'CxTzAGGGTttA';
  const expected1 = 'CTAGGGTA';

  // Llama a la función dnaStringFilter con el input1 y verifica si el resultado es igual al expected1
  expect(dnaStringFilter(input1)).toBe(expected1);
});
