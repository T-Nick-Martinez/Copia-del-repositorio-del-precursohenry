function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let objetonuevo={}
  objetonuevo["nombre"]=nombre;
  objetonuevo["email"]=email;
  objetonuevo["password"]=password;
  return objetonuevo;
}

module.exports = nuevoUsuario;
