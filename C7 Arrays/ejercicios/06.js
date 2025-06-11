function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
/*let firstthelast = [];
let cant = (array.length)-1;
console.log(array);
for(let i= cant; i>=0; i--)
{
firstthelast.push(array[i]);
}
return firstthelast; */ 
//voy a probar con .reverse, lo encontre recien!
 


array.reverse();
return array;

  }




module.exports = invertirArray;
