function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let contadorin=0;
  for(let i=0; i<(objetoUsuario["posts"].length);i++)
    {
     let a= objetoUsuario["posts"][i]["likes"] // RE IMPORTANTE NO OLVIDARTE LAS COMILLAS WACH
     contadorin= contadorin +a;
    }  
    return contadorin;
  

}

module.exports = sumarLikesDeUsuario;
/*
objetoUsuario = {
posts:[post={likes:cantidad}, post={likes:catidad}, post....]
}
*/