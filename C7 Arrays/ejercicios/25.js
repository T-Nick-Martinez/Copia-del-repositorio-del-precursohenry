function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let elementin=0;
  let contadordepares=0;
  for(let i=0; i<(numeros.length); i++)
  {
    elementin=numeros[i];
    if(elementin%2===0)
    {
      contadordepares=contadordepares+1
    }
    else{
      continue;
    }
  }
  return contadordepares;
}

module.exports = contarParesConContinue;
