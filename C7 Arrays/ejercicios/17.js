function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
var acumulador=0;
let elementin=0;

for(let i=0; i<(arrayOfNums.length); i++)
{
elementin=arrayOfNums[i];
acumulador=acumulador+elementin;
}
return acumulador;
}

module.exports = agregarNumeros;

