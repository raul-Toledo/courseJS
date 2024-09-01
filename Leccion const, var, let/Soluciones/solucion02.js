// Solución propuesta para el Ejercicio 2

// 1. Declara la constante `PI`
const PI = 3.14;

// 2. Intenta reasignar `PI` (esto debería causar un error)
// PI = 3.14159; // Esto causará un error porque `PI` es una constante

// 3. Declara un objeto `circle`
const circle = {
  radius: 10
};

// 4. Modifica la propiedad `radius` de `circle`
circle.radius = 15; // Esto es posible porque `circle` es un objeto y las propiedades pueden ser modificadas

console.log(circle); // Imprime `{ radius: 15 }`
