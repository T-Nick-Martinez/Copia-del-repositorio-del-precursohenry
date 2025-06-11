function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var elindicegrande=0;
var elementin=0;
for(let i=0; i<(array.length);i++)
{
  elementin=array[i];
  if(elementin>array[elindicegrande]){
    elindicegrande=i;
  }
}
return elindicegrande;
}

module.exports = encontrarIndiceMayor;

