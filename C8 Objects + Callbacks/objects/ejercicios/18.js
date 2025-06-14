function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  array= objetoUsuario["amigos"]
  array.push(nuevoAmigo);
  objetoUsuario["amigos"]=array;
  return objetoUsuario;
}

module.exports = agregarAmigo;
