function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var arregloaux=[]
  var otxet="";
  for(let i=0;i<(texto.length);i++)
  {
    arregloaux.push(texto.charAt(i))
  }

  arregloaux.reverse();

  for(let j=0; j<(arregloaux.length);j++)
  {
    otxet=otxet+arregloaux[j];
  }
  return otxet;
}


module.exports = invertirTexto;
