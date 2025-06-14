const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let consta=0;
  for(let property in objeto)
  {
    consta=consta +1
  }
  return consta;
}

module.exports = contarPropiedades;
