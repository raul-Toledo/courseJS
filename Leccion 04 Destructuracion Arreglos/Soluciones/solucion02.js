

// Esta función recibe un arreglo llamado 'deck' (puede ser una baraja de cartas, por ejemplo)
function getSecondCard(deck) {
  // Validamos que 'deck' sea un arreglo y que tenga al menos dos elementos
  if (!Array.isArray(deck) || deck.length < 2) {
    // Si no es un arreglo o tiene menos de dos elementos, regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Usamos la destructuración de arreglos para obtener el primer y segundo elemento del arreglo 'deck'.
  // La sintaxis [first, second] = deck significa que 'first' tendrá el valor del primer elemento y 'second' el valor del segundo elemento del arreglo.
  const [first, second] = deck;
  // Retornamos el segundo elemento encontrado. Así, si el arreglo es ['A', 'B', 'C'], regresará 'B'.
  return second;
}