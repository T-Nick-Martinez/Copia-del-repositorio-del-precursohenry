function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arreglo=[];
  let result=0;
  for(let i=0;i<11;i++)
  {
    result= 6*i;
    arreglo.push(result);
  
  }
  return arreglo;
}

module.exports = tablaDelSeis;
