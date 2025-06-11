function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var elementin=0;
  var elmultiploes=0;
 for (let i =0; i<(secuencia.length); i++)
 {
  elementin= secuencia[i];
  if((elementin % n)===0)
  {
    elmultiploes= elementin;
    break
  }
 }
 if(elmultiploes===0){
  return undefined;
 }
 return elmultiploes
}

module.exports = encontrarPrimerMultiploDeN;