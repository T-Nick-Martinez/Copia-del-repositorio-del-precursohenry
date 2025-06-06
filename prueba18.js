function productoEntreNumeros(a, b) {
  let producto = 1;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      producto *= i;
      console.log(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      producto *= i;
      console.log(i);
    }
  }

  return producto;
}

console.log(productoEntreNumeros(3, 7));
