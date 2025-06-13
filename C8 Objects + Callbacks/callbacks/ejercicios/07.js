function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arregloa=[];
   let elementin="";
   for(let i=0; i<(arrayOfStrings.length);i++)
   {
      elementin= arrayOfStrings[i];
      if(elementin[0]==="a")
      {
         arregloa.push(elementin);
      }
   }
   return arregloa;
}

module.exports = filter;
