function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementin=0;
var resultadin=0;
var arrayresultante=[];
for(let i=0; i<(array.length); i++)
{
  elementin=array[i];
  resultadin=elementin*i;
  arrayresultante.push(resultadin);
}
return arrayresultante;
}

module.exports = multiplicarElementosPorIndice;


