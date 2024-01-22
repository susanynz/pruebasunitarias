
function dnaStringFilter(dnaString) {
    if (typeof dnaString === 'string' && dnaString !== '') {
      // Eliminar caracteres no canónicos utilizando una expresión regular
      return dnaString.replace(/[^CTAG]/g, '');
    } else {
      return ''; // Retorna cadena vacía si la entrada no es válida o está vacía
    }
  }
  
  module.exports = dnaStringFilter;
  