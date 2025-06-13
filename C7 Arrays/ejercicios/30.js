function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
//var numeros=[1,4,6,2,0,9,0];
var elementin=numeros[0];
var numj=null;
var conta=0;

for(let i=0; i<(numeros.length);i++)
{
  elementin=numeros[i];
  for(let j=0; j<(numeros.length);j++)
  {
    numj= numeros[j];
    if(numj===elementin)
    {
      conta=conta +1;
    }   
  }
  if(conta==2)
  {
    
    //console.log(elementin);
    return elementin;
    break
  }
  else{
    conta=0;
  }
}
return undefined;


}


module.exports = encontrarElementoRepetido;



