function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
    var arregloaux=[]
  var otxet="";
  for(let i=0;i<(string.length);i++)
  {
    arregloaux.push(string.charAt(i))///viste cuando haces un for por no recordar la exitencia de .split .... ._."
  }

  arregloaux.reverse();

  for(let j=0; j<(arregloaux.length);j++)
  {
    otxet=otxet+arregloaux[j]; // y aca por no usar .join hice otro for ._."" 
  }
  
  if(otxet===string)
  {
    return true;
  }
  else{
    return false;
  }
}

module.exports = esPalindromo;