

// Esta función recibe un arreglo llamado 'deck' (puede ser una baraja de cartas, por ejemplo)
function shiftThreeCardsAround(deck) {
  // Validamos que 'deck' sea un arreglo y que tenga al menos tres elementos
  if (!Array.isArray(deck) || deck.length < 3) {
    // Si no es un arreglo o tiene menos de tres elementos, regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Usamos la destructuración de arreglos para obtener el primer, segundo y tercer elemento del arreglo 'deck'.
  // 'a' tendrá el valor del primer elemento, 'b' el del segundo y 'c' el del tercero.
  let [a, b, c] = deck;
  // Intercambiamos los valores de los tres elementos:
  // 'a' toma el valor de 'b', 'b' toma el valor de 'c', y 'c' toma el valor de 'a' original.
  // Si el arreglo original era ['A', 'B', 'C'], después del cambio será ['B', 'C', 'A'].
  [a, b, c] = [b, c, a];
  // Retornamos un nuevo arreglo con los valores cambiados.
  return [a, b, c];
}