function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var elementin = 0;
  var anteriorin=array[0];
 for(let i=0; i<(array.length);i++)
 {
  elementin= array[i];
  if(elementin===anteriorin)
  {
    anteriorin= array[i];
   
  }
  else{
    return false;
  }
 }
 return true;
 
 }

module.exports = todosIguales;
