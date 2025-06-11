function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  var elem="0";
var stleng=0;
for(let i=0; i<(array.length); i++)
{
  elem=array[i]
  stleng=elem.length;
  if (stleng>=5){
    return elem;
    break;
  }
}

}

module.exports = obtenerPrimerStringLargo;
