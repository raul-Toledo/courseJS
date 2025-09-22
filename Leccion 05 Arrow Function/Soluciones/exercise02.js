const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

/**
 * Verifica si una carta existe en el arreglo de cartas.
 * @param {Array} deck - Arreglo de cartas.
 * @param {*} card - Carta a buscar.
 * @returns {boolean} true si la carta existe, false si no.
 */
const findCard = (deck, card) => {
  // Verificamos que el parámetro 'deck' sea un arreglo
  if (!Array.isArray(deck)) throw new TypeError('deck debe ser un arreglo');
  // Usamos el método includes para verificar si la carta existe en el arreglo
  // Devuelve true si la carta está en el arreglo, false si no está
  return deck.includes(card);
};