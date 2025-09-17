

// Esta función recibe un arreglo llamado 'deck' (puede ser una baraja de cartas, por ejemplo)
function getFirstCard(deck) {
  // Validamos que 'deck' sea un arreglo y que tenga al menos un elemento
  if (!Array.isArray(deck) || deck.length === 0) {
    // Si no es un arreglo o está vacío, regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Usamos la destructuración de arreglos para obtener el primer elemento del arreglo 'deck'.
  // La sintaxis [first] = deck significa que 'first' tendrá el valor del primer elemento del arreglo.
  const [first] = deck;
  // Retornamos el primer elemento encontrado. Así, si el arreglo es ['A', 'B', 'C'], regresará 'A'.
  return first;
}
