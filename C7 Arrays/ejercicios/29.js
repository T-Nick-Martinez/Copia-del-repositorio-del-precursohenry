function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length===0)
  {
    return null;
  }
let elementin=null;
let contadordeies= numeros[0];
let elnumes=null;
  for(let i=0; i<(numeros.length); i++)
{ 
  elementin= numeros[i]
  if(contadordeies!== elementin)
  {
    elnumes=(elementin-1);
    return elnumes;
    break;
  }
  else{
    contadordeies=contadordeies+1
  }

}
return null;
}

module.exports = encontrarNumeroFaltante;



///////////////////////////////////aclaracion////////////////////
// originamente entendí que dentro del array recibido iba a haber un espacio vacio, ya sea nulo o indefinido. 
// el codigo de abajo lo hice para detectar el espacio vacio ._. 
//lo dejo como recuerdo de que no testear hasta que "mentalmente este bien" puede salir mal/ en una perdida de tiempo
 /*var elementin=null;
var anteriorin=null;
var idelementin=null;
var contadordeies=0;
for(let i=0; i<(numeros.length);i++)
{
  elementin= numeros[i];
  if(elementin===null || elementin=== undefined)
  {
    anteriorin=numeros[(i-1)];
    idelementin=i;
    break;
  }
  else{
    contadordeies=contadordeies+1;
  }
}
if(contadordeies===(numeros.length))
{
  
  return null;
}
else{
  
  return (anteriorin+1);
}*/