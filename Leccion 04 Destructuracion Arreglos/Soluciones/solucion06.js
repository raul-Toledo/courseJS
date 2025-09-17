

// Esta función recibe un objeto llamado 'piles', que tiene al menos dos propiedades: 'chosen' y 'disregarded'
function swapNamedPile(piles) {
  // Validamos que 'piles' sea un objeto y que tenga las propiedades 'chosen' y 'disregarded'
  if (
    typeof piles !== 'object' ||
    piles === null ||
    !('chosen' in piles) ||
    !('disregarded' in piles)
  ) {
    // Si no es un objeto o no tiene ambas propiedades, regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Usamos la destructuración de objetos para obtener las propiedades 'chosen' y 'disregarded' del objeto 'piles'.
  // Por ejemplo, si piles = { chosen: ['A'], disregarded: ['B'] }, entonces 'chosen' será ['A'] y 'disregarded' será ['B'].
  let { chosen, disregarded } = piles;
  // Intercambiamos los valores de 'chosen' y 'disregarded'.
  // Ahora 'chosen' tendrá el valor original de 'disregarded' y viceversa.
  [chosen, disregarded] = [disregarded, chosen];
  // Retornamos un nuevo objeto con las propiedades 'chosen' y 'disregarded' ya intercambiadas.
  // Por ejemplo, si el objeto original era { chosen: ['A'], disregarded: ['B'] }, el resultado será { chosen: ['B'], disregarded: ['A'] }.
  return { chosen, disregarded };
}