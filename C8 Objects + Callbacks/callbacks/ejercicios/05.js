function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  let elementin= array[0];
  for(let i=0;i<(array.length);i++)
  {
    elementin= array[i];
    cb (elementin);
  }
    
}

module.exports = forEach;
