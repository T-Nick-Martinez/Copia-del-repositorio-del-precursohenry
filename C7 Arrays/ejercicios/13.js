function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var ct=[];

for(let i=0; i<(array.length); i++)
{
  if(array[i]%2===0){
    ct.push(array[i])
  }
}
return ct;
}

module.exports = filtrarNumerosPares;

