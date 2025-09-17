

// Esta función recibe un objeto llamado 'piles', que representa varios montones o pilas (por ejemplo, de cartas)
function pickNamedPile(piles) {
  // Validamos que 'piles' sea un objeto y que tenga la propiedad 'chosen'
  if (typeof piles !== 'object' || piles === null || !('chosen' in piles)) {
    // Si no es un objeto o no tiene la propiedad 'chosen', regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Guardamos el objeto 'piles' en una nueva variable llamada 'newDeck'.
  // Esto no crea una copia, solo le da otro nombre al mismo objeto.
  const newDeck = piles;
  // Retornamos la propiedad 'chosen' del objeto 'newDeck'.
  // Si 'piles' tiene una propiedad llamada 'chosen', por ejemplo: { chosen: ['A', 'B'], other: [...] }, regresará ['A', 'B'].
  return newDeck.chosen;
}