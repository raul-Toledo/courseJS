# Ejercicios: Trucos de Magia con Destructuración

## Descripción General
Elyse, una maga en entrenamiento, está perfeccionando sus trucos de ilusionismo con cartas. Para realizar sus actos mágicos, necesita dominar el arte de manipular el mazo de cartas usando técnicas de destructuración en JavaScript.

Cada ejercicio representa un truco mágico que requiere manipular arrays y objetos mediante destructuración para lograr el efecto deseado.

## Objetivos de los Ejercicios
- Practicar destructuración de arrays y objetos en JavaScript
- Dominar la manipulación de elementos en arrays
- Aprender a reordenar e intercambiar valores
- Trabajar con propiedades de objetos mediante destructuración

## Ejercicios

### Ejercicio 1: Obtener la primera carta
**Escenario:** Elyse necesita invocar la primera carta de la baraja para iniciar su truco.  
**Instrucciones:** Crea una función `getFirstCard(deck)` que devuelva el primer elemento de un array de cartas (`deck`) usando destructuración.  

const deck = [5, 9, 7, 1, 8];
getFirstCard(deck); // => 5

### Ejercicio 2: Obtener la segunda carta
**Escenario:** Elyse realiza un truco de ilusionismo para invocar la segunda carta del mazo.
**Instrucciones:** Crea una función getSecondCard(deck) que devuelva el segundo elemento del array deck utilizando destructuración.

const deck = [3, 2, 10, 6, 7];
getSecondCard(deck); // => 2

### Ejercicio 3: Intercambiar dos cartas
**Escenario:**: Elyse necesita que dos cartas de la baraja cambien de posición mágicamente.
**Instrucciones:** Crea una función swapTwoCards(deck) que intercambie el primer y el segundo elemento de un array de dos cartas sin usar funciones adicionales, solo destructuración.

const deck = [10, 7];
swapTwoCards(deck); // => [7, 10]

### Ejercicio 4: Mover tres cartas
**Escenario:** Para otro truco de magia, Elyse toma tres cartas, mueve la superior al final, la del medio al principio y la del fondo al medio.
**Instrucciones:** Crea una función shiftThreeCardsAround(deck) que reordene un array de tres cartas de la manera descrita usando destructuración.

const deck = [2, 6, 10];
shiftThreeCardsAround(deck); // => [6, 10, 2]

### Ejercicio 5: Elegir una pila nombrada
**Escenario:** Elyse separa el mazo en dos pilas, una llamada chosen (elegida) y la otra disregarded (descartada). El truco consiste en seleccionar la pila chosen del objeto que las contiene.
**Instrucciones:** Crea una función pickNamedPile(piles) que acepte un objeto con las propiedades chosen y disregarded y devuelva el valor de la propiedad chosen usando destructuración.

const piles = { chosen: [5, 4], disregarded: [7, 10] };
pickNamedPile(piles); // => [5, 4]

### Ejercicio 6: Intercambiar la pila elegida
**Escenario:** El espectador "equivocado" sigue eligiendo la pila, así que Elyse debe cambiar la pila chosen por la disregarded de forma mágica.
**Instrucciones:** Crea una función swapNamedPile(piles) que acepte un objeto con las propiedades chosen y disregarded y devuelva un nuevo objeto donde los valores de estas dos propiedades se hayan intercambiado.

const piles = { chosen: [5, 4], disregarded: [7, 10] };
swapNamedPile(piles); // => { chosen: [7, 10], disregarded: [5, 4] }

## Indicaciones
En cada tarea, asegúrate de cumplir con las especificaciones y de revisar las soluciones propuestas para comparar tu código.

## Archivo de Soluciones
En el archivo de soluciones encontrarás una explicación detallada de cada uno de los ejercicios y cómo resolverlos.

## Consejos
Revisa la documentación de destructuración de arrays y objetos
Recuerda que la destructuración permite extraer valores de manera concisa
Practica con ejemplos adicionales para fortalecer tu comprensión
¡Prepara tu varita mágica y domina el arte de la destructuración!