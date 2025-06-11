function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:



   let leng=array.length;
   var randomis= Math.floor(Math.random()*leng);
   var retorno= array[randomis];
   return(retorno);
   


}
   
  

module.exports = obtenerElementoAleatorio;
