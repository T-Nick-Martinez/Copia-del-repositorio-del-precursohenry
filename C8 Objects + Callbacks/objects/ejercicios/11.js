function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
   objeto[metodo]();// fijate aca que pa que ande pusiste los parentesis afuera del nombre de la prop

}

module.exports = invocarMetodo;
