function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  if(str1.length === str2.length){
    return true;
  }
  else {
    return false;
  }
}
// Esto solo es para probar la función desde consola (me anda pero no se porque el test  no lo corre)
//console.log(tienenMismaLongitud("Hola", "Chau")); // true
//console.log(tienenMismaLongitud("Hola", "Adiós")); // false
 
module.exports = tienenMismaLongitud;