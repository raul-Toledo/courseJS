const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

/**
 * Busca el índice de una carta en el arreglo de cartas.
 * @param {Array} deck - Arreglo de cartas.
 * @param {*} card - Carta a buscar.
 * @returns {number} Índice de la carta o -1 si no existe.
 */

const findIndex = (deck, card) => {
  // Verificamos que el parámetro 'deck' sea un arreglo
  if (!Array.isArray(deck)) throw new TypeError('deck debe ser un arreglo');
  // Usamos el método findIndex para buscar la posición de la carta
  // La función flecha compara cada elemento 'c' con el valor de 'card'
  // Si encuentra la carta, devuelve su índice; si no, devuelve -1
  return deck.findIndex(c => c === card);
};