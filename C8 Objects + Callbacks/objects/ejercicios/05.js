const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  let arr=[];
  arr= Object.keys(objeto);
  return arr;
};

module.exports = listarPropiedades;
