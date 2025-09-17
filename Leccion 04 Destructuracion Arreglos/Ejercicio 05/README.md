### Ejercicio 5: Elegir una pila nombrada
**Escenario:** Elyse separa el mazo en dos pilas, una llamada chosen (elegida) y la otra disregarded (descartada). El truco consiste en seleccionar la pila chosen del objeto que las contiene.
**Instrucciones:** Crea una función pickNamedPile(piles) que acepte un objeto con las propiedades chosen y disregarded y devuelva el valor de la propiedad chosen usando destructuración.

const piles = { chosen: [5, 4], disregarded: [7, 10] };
pickNamedPile(piles); // => [5, 4]