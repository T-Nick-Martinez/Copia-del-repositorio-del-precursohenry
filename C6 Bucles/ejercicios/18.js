function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let alm= 1
  if(a==0 || b== 0 || a<0 ||b<0)
  {
    return 0;
  }
  else
  {

  if(a<b)
  {
    for(let i= a; i<=b ; i++)
    {
      alm= alm*i;
    }

  }
  else
  {
    for(let i=b; i<=a; i++)
    {
      alm=alm*i;
    }
  }
  return alm;
}

}



module.exports = productoEntreNúmeros;