function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var elementin=0;
  var acumulador=1;
  if(arguments.length===0)
  {
    acumulador=0
  }
  else
  {
      for(let i=0; i<(arguments.length);i++)
  {
    elementin=arguments[i];
    acumulador=acumulador *elementin;
  }
  }
  return acumulador;

}

module.exports = multiplicarArgumentos;
