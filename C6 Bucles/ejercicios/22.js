function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let acum=num
  let i=0
  do{
    acum= acum +5;
    i++
  }
  while(i<8);
  return acum;
}

module.exports = doWhile;