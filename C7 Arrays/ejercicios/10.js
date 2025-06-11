function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var fws= 0;
  fws= array.find((Element) => (Element.length)>5);
  return fws;  
}

module.exports = obtenerPrimerStringLargo;
