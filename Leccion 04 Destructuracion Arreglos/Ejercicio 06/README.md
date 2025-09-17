### Ejercicio 6: Intercambiar la pila elegida
**Escenario:** El espectador "equivocado" sigue eligiendo la pila, así que Elyse debe cambiar la pila chosen por la disregarded de forma mágica.
**Instrucciones:** Crea una función swapNamedPile(piles) que acepte un objeto con las propiedades chosen y disregarded y devuelva un nuevo objeto donde los valores de estas dos propiedades se hayan intercambiado.

const piles = { chosen: [5, 4], disregarded: [7, 10] };
swapNamedPile(piles); // => { chosen: [7, 10], disregarded: [5, 4] }