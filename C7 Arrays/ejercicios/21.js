function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var arraymeses=[];
  var elementin="0"
  for(let i=0; i<(array.length); i++)
  {
    elementin= array[i];
    if(elementin==="Enero"|| elementin==="Marzo"||elementin==="Noviembre")
    {
      arraymeses.push(elementin);
    }
  }
  if(arraymeses.includes("Enero")&& arraymeses.includes("Marzo") && arraymeses.includes("Noviembre"))
  {
    return arraymeses;
  }
  else{
    return "No se encontraron los meses pedidos";
  }
}


module.exports = mesesDelAño;
