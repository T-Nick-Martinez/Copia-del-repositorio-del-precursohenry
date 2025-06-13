function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
let str1= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
let str2="bbbbbbbbbbbbbbbbbbbbbbb";
let str3="ccccccccccccccccccccccccccccccccccccccccccccccc";

let texto="";
let maxlenght= Math.max((str1.length),(str2.length),(str3.length));

for(let i=0;i<maxlenght;i++)
{
  if(i<(str1.length))
  {
    texto=texto + str1[1]
  }
  if(i<(str2.length))
  {
    texto = texto + str2[i];
  }
  if(i<(str3.length))
  {
    texto= texto + str3[i]
  }
}
return texto;


}

module.exports = combine;
