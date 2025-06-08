function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
}

var array=["comida", "documentos", "ropa", "juguetes", "higiene"];
var lastof = [];
console.log(array);
//console.log (lastof);

var long= (array.length)-1;
var i=0
do {
  lastof= [lastof + " " + (array.pop())]
  i= i +1;
  console.log(lastof);

}
while(i<=long)
  var arregloinvertido = lastof.split(" ");
  console.log(arregloinvertido)
  console.log(lastof);
module.exports = invertirArray;
