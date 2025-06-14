function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   //objeto.propiedad = valor; ------------ esta forma de aca busca o crea una propiedad que literalmente se llame propiedad
   //el caso actual es que propiedad es el nombre de la variable que contiene al nombre de la propiedad. no el strinnombre 
   return objeto;
}

module.exports = actualizarValorPropiedad;
