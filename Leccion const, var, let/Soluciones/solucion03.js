// Solución propuesta para el Ejercicio 3

// 1. Declara la variable `x` usando `let`
let x = 5;

if (true) {
  // 2. Declara otra variable `x` usando `let` dentro del bloque
  let x = 10;
  console.log(x); // Imprime 10 debido al alcance de bloque de `let`
}

console.log(x); // Imprime 5 porque la `x` dentro del bloque no afecta a la `x` fuera del bloque

// 4. Repite el ejercicio usando `const`
const y = 5;

if (true) {
  const y = 10;
  console.log(y); // Imprime 10, ya que `const` también tiene alcance de bloque
}

console.log(y); // Imprime 5 porque la `y` dentro del bloque no afecta a la `y` fuera del bloque
