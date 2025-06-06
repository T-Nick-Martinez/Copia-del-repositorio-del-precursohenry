function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let condiv=0
  let i= numero
  let aux=numero;
  do
  {
    if(aux%i==0){
      condiv=condiv+1;
    }
    i--;
  }
  while(i>0)
    if(condiv>2){
      return false;
    }
    else{
      return true;
    }
}

module.exports = esNumeroPrimo;
