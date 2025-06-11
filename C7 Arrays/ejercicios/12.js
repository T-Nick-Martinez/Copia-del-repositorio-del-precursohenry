function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var Mayusarray=[];
var mayuselement=0


for(let i=0; i<(array.length); i++)
{
  mayuselement=array[i];
  Mayusarray.push(mayuselement.toUpperCase());
}
return Mayusarray;
}


//
module.exports = convertirStringAMayusculas;

