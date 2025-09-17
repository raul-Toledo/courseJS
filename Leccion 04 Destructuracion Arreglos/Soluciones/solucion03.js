

// Esta función recibe un arreglo llamado 'deck' (puede ser una baraja de cartas, por ejemplo)
function swapTwoCards(deck) {
  // Validamos que 'deck' sea un arreglo y que tenga al menos dos elementos
  if (!Array.isArray(deck) || deck.length < 2) {
    // Si no es un arreglo o tiene menos de dos elementos, regresamos 'undefined' y explicamos el motivo
    // Esto ayuda a evitar errores si se llama la función con datos incorrectos
    return undefined;
  }
  // Usamos la destructuración de arreglos para obtener el primer y segundo elemento del arreglo 'deck'.
  // 'a' tendrá el valor del primer elemento y 'b' el valor del segundo elemento.
  let [a, b] = deck;
  // Intercambiamos los valores de 'a' y 'b'. Ahora 'a' tendrá el valor original de 'b' y viceversa.
  [a, b] = [b, a];
  // Retornamos un nuevo arreglo con los valores intercambiados. Si el arreglo original era ['A', 'B'], regresará ['B', 'A'].
  return [a, b];
}