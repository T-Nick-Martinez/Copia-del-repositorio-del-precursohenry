function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let complemento=[];
  let elementin=array[0];
  for(let i=0; i<(array.length);i++)
  {
    elementin=(array[i]);
    complemento.push(cb(elementin));
  }
  return complemento;
}

module.exports = map;
