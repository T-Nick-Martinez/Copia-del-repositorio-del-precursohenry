function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var elementin=0;
  var denominador=resultadosTest.length;
  var acumulador=0;
  var promedio= 0;
  for(let i=0; i<denominador;i++)
  {
    elementin=resultadosTest[i];
    acumulador=acumulador+elementin;
  }
  promedio= (acumulador/denominador);
  return promedio;
}

module.exports = promedioResultadosTest;
