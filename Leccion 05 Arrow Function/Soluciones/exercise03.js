const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

/**
 * Verifica si todas las cartas de un arreglo son pares.
 * @param {Array} deck - Arreglo de cartas (strings como '2♠', 'J♠', o números).
 * @returns {boolean} true si todas las cartas son pares, false si alguna no lo es.
 */
const isEachCardEven = (deck) => {
  // Usamos el método every para verificar cada carta del arreglo
  return deck.every((card) => {
    // Si la carta es un string (por ejemplo, '2♠', 'J♠')
    if (typeof card === 'string') {
      // Si la carta es As, Jota o Rey, no es par
      if (card.startsWith('A')) return false; // AS es 1, que no es par
      if (card.startsWith('J')) return false; // Jota es 11, que no es par
      if (card.startsWith('Q')) return true;  // Reina es 12, que es par
      if (card.startsWith('K')) return false; // Rey es 13, que no es par
      // Extraemos el número de la carta (por ejemplo, '10♠' -> 10)
      const number = parseInt(card.substring(0, card.length-1)); // Convertimos la carta a número
      // Verificamos si el número es par
      return number % 2 === 0;
    }
    // Si la carta es un número
    else if (typeof card === 'number') {
      // Verificamos si el número es par
      return card % 2 === 0;
    }
    // Si la carta no es string ni número, lanzamos un error
    else {
      throw new TypeError('Cada carta debe ser un número o una cadena de texto');
    }
  });
};