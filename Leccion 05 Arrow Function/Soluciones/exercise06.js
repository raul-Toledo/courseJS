const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

/**
 * Devuelve el índice de la primera carta par en el arreglo.
 * @param {Array} deck - Arreglo de cartas (strings como '2♠', 'J♠', o números).
 * @returns {number} Índice de la primera carta par, o -1 si no existe.
 * @throws {TypeError} Si alguna carta no es string ni número.
 */
const getFirstEvenCard = (deck) => {
  // Usamos findIndex para buscar la primera carta par
  return deck.findIndex(card => {
    // Si la carta es un string (por ejemplo, '2♠', 'J♠')
    if (typeof card === 'string') {
      // Si la carta es As, Jota o Rey, se consideran impares
      if (card.startsWith('A')) return false; // As es 1, impar
      if (card.startsWith('J')) return false; // Jota es 11, impar
      if (card.startsWith('Q')) return true;  // Reina es 12, par
      if (card.startsWith('K')) return false; // Rey es 13, impar
      // Extraemos el número de la carta (por ejemplo, '10♠' -> 10)
      const number = parseInt(card.substring(0, card.length-1));
      // Verificamos si el número es par
      return number % 2 === 0;
    }  
    // Si la carta es un número
    if (typeof card === 'number') {
      // Verificamos si el número es par
      return card % 2 === 0;
    }

     // Si la carta no es string ni número, mandamos error
    throw new Error("Cada carta debe ser un número o una cadena de texto");
});
};