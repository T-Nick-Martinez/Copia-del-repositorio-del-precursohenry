function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let cont=numero;

    while(cont>=2)
    {
      cont=cont/2
    }
    if(cont==1) {
      return true;
    }
    else{
      return false;
    }
    console.log(cont);
}
console.log(esPotenciaDeDos(32));

module.exports = esPotenciaDeDos;
