const { flushSync } = require("react-dom");

function esAnagrama(str1, str2) {
 // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let srt1low =str1.toLowerCase();
 let str2low= str2.toLowerCase();
 if(srt1low===str2low)
 {
    
    return true;
 }

 if(srt1low.length===str2low.length)
 {
    let arreglo1 = srt1low.split("");
    let arreglo2= str2low.split("")

    for(i=0;i<arreglo1.length;i++)
    {
        let a= arreglo1[i];
        let index= arreglo2.indexOf(a)
        if(index<0)
        {
            
            return false;
        }
        else
        {
            arreglo2.splice(index,1);
        }
    }
    if(arreglo2.length===0)
    {   
        return true
    }
    else{
        
        return false;
    }

 }
 else{
    
    return false;

}
}

module.exports = esAnagrama;



////////////////////////////////////////////////////////////////////////////////////77
/* el codigo de abajo lo hizo GPT cuando no conseguia ver el error de mi codigo (agregue un if(); y no entraba nunca
a la condicion.....
a pesar de ver uqe Chat GPT lo hizo MUCHISIMO mas acotado, preferí la logica en la que controlo el flujo
(sobre todo porque no estoy ten ducho aun)
Dejo abajo el código optimizado por GPT
////////////////////////////////////////////////////////////77
function esAnagrama(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr1 = str1.split('').sort().join('');
  let arr2 = str2.split('').sort().join('');

  return arr1 === arr2;
}
  //////////////////////////////////////////////
*/