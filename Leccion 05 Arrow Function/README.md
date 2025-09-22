## Ejercicio 01
Encontrar la posición de una carta
Valeria y Leo quiere saber la posición (índice) de una carta en el mazo.
const card = 2;
getCardPosition([9, 7, 3, 2], card);
// => 3

## Ejercicio 02
Determinar si una carta está presente
Valeria y Leo quiere determinar si una carta está presente en el mazo - en otras palabras, si el mazo contiene un número específico.
const card = 3;
doesStackIncludeCard([2, 3, 4, 5], card);
// => true

## Ejercicio 03
Determinar si cada carta es par
Valeria y Leo quiere saber si cada carta es par - en otras palabras, si cada número en el mazo es un número par.
isEachCardEven([2, 4, 6, 7]);
// => false

## Ejercicio 04
Verificar si el mazo contiene una carta de valor impar
Valeria y Leo quiere saber si hay un número impar en el mazo.
doesStackIncludeOddCard([3, 2, 6, 4, 8]);
// => true

## Ejercicio 05
Obtener la primera carta impar del mazo
Valeria y Leo quiere saber el valor de la primera carta que es impar.
getFirstOddCard([4, 2, 8, 7, 9]);
// => 7

## Ejercicio 06
Determinar la posición de la primera carta que es par
Valeria y Leo quiere saber la posición de la primera carta que es par.
getFirstEvenCardPosition([5, 2, 3, 1]);
// => 1