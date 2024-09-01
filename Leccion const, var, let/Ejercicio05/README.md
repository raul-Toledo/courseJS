## Ejercicio 5: Comprendiendo Closure con `let` y `var`

**Objetivo:** Entender cómo `let` y `var` afectan las funciones que capturan variables en cierres (closures).

**Instrucciones:**
1. Declara un array `funcs` vacío.
2. Crea un ciclo `for` que itere de 0 a 2 y dentro del ciclo, agrega una función anónima a `funcs` que imprima el valor actual del índice.
3. Ejecuta las funciones almacenadas en `funcs` después del ciclo usando `var` para declarar el índice.
4. Modifica el código para usar `let` en lugar de `var` y observa cómo cambia el comportamiento.

**Puntos pedagógicos:**
- Enfatizar cómo `let` permite capturar correctamente el valor del índice en cada iteración, mientras que `var` no.
- Introducir el concepto de closure.
