function tieneTresDigitos(num) 
{
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
    if (num === Math.round(num)) //primero chequeamos que sea entero
        {
         if((num/100)>=1 && (num/100)<10) //aca me dice (tarde) la cabeza que podia comprobar derecho num>=100 xD
        {
            return true;
        }
        else {
            return false; // es entero pero tiene mas de tres digitos
        }
        } 
        
    else // si no es entero entra aca
        {
            let num1= (num*10)
            if((num1)===Math.round(num1)) //aca vemos que num*10=entero(un decimal da true)
            {
                if(num1>=100 && num1<1000) // si num1 tiene tres digitos =true
                {
                    return true
                }
                else{
                    return false; //si num1 tiene mas de tres digitos da falso
                }
            } 
            else { //aca entra cuando num1 tiene decimales
                let num2 =(num * 100)
                if(num2 === Math.round(num2))// chequeamos si num2 da entero
                {  if(num2 >=100 && num2<1000) // si da entero da true
                {
                    return true;
                }
                  else {return false;

                }

                }
                else {
                    return false;
                }


            }
         } // aca termina el else no entero
        
}



console.log(tieneTresDigitos(123));     // true
console.log(tieneTresDigitos(99));      // false
console.log(tieneTresDigitos(9.87));    // true (porque 9.87 → 987)
console.log(tieneTresDigitos(0.123));   // false
console.log(tieneTresDigitos(1000));    // false
console.log(tieneTresDigitos(12.3));    // true (→ 123)

  /* bueno hice esto pero en el camino me entere al temrinar que NO funciona switch como comparador logico, lo dejo como nocion de que NO hacer con Switch
 
 switch(num)
 {
   case (num === Math.round(num)):
   {
      if (num/100 >= 1 && num/100 <10){
        return true; 
        }
      else {
          return  false;
            }
  }
  case (num !== Math.round(num) && (num * 10)===Math.round((num *10))): 
  {
      if((num * 10)>= 100 && (num *10)<1000) {
        return true;
      }
  }
  case (num !== Math.round(num) && (num * 100)===Math.round((num *100))):
          if((num * 100)>= 100 && (num *100)<1000) {
        return true;
      }
  case (num !== Math.round(num) && (num * 100)!==Math.round((num *100))):
    {
      return false;
 }

}
}

var num = 3
*/
