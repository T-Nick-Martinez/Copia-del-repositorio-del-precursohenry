function tieneTresDigitos(num) 
{
  if (num === Math.round(num)) {
    if(num >= 100 && num < 1000) {
      return true;
    } else {
      return false;
    }
  } else {
    let num1 = num * 10;
    if(num1 === Math.round(num1)) {
      if(num1 >= 100 && num1 < 1000) {
        return true;
      } else {
        return false;
      }
    } else {
      let num2 = num * 100;
      if(num2 === Math.round(num2)) {
        if(num2 >= 100 && num2 < 1000) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
}

console.log(tieneTresDigitos(123));     // true
console.log(tieneTresDigitos(99));      // false
console.log(tieneTresDigitos(9.87));    // true (porque 9.87 → 987)
console.log(tieneTresDigitos(0.123));   // false
console.log(tieneTresDigitos(1000));    // false
console.log(tieneTresDigitos(12.3));    // true (→ 123).
console.log(9.87 * 100);  // ➜ 986.9999999999999

//bueno no sirvio el modelo de resolución que plantee, estaba tratando de evitar  convertir el numero en string pues en ese caso tomaria el 0 a la izquierda, pero 100*9,87 != 987 pues JS da 986.9999999