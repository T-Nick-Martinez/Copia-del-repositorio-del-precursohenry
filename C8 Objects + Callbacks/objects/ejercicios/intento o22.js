function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
let a=""
let b=""
let contadorin=0;
   if(str1===str2)
   {
    return true
   }
   if (str1.length===str2.length)
   {
        for(let i=0;i<(str1.length);i++)
        {
            a= str1[i];
            b=str2.includes(a)
            if(b===true)
            {
                contadorin=contadorin+1;
            }
            else{
                continue;
            }
        }
        console.log("contadorin es:", contadorin);
        if(contadorin===str2.length);
        {
            return true;
        }
        return false;
   }
    else{
        return false
    }    

}

str1= "hola amigb"
str2= "aloh amigo"
let al= esAnagrama(str1,str2)
console.log (al);