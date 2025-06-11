function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
 
var doble=[];
for (let i=0; i<array.length; i++)
{
  doble[i]= (array[i]*2);
}
return doble;
}

module.exports = duplicarElementos;
