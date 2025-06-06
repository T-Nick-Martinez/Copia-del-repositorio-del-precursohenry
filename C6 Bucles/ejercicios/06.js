function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if ((num/100) >=1 && (num/100) < 10 && Math.round(num) === num){
    return true;
  }
  else {
    return false;
  }
  // Hola! Acá  Nick! lo tomó así, pero hay una falla: sólo funciona si los tres digitos estan a la derecha de la coma. mientras que la consigna no menciona que sea siempre entero
  //habría que verificar primero si es entero, si lo es aplicar el if tal cual esta, de lo contrario, verificar que num*10 >


  //Hola de nuevo! hice otro .js para probar otras cosas para este ejercicio function tieneTresDigitos(num).js donde probe con switch (pero al termianr me entere que no funciona )
  //como comparador logico, lo use como una especie de if pero por lo anterior no sivio.
  // luego intenté multiplicar el numero num*10, verificar si asi queda entero (un decimal) y si da tres cifras, sino num*100 (dos decimales) y verificar si tiene tres cifras.
  //aunque no fue mala idea, no contaba con el sistema de coma flotante de JS por lo que un numero como 9.87 devuelve false ya que 9.87*100 !=987 =986.99999999 
  // me interesa ver como salvar el valor. pense en convertirlo en string y contar el largo, pero tomaria los ceros a la izquierda como cifra válida.
}

module.exports = tieneTresDigitos;
