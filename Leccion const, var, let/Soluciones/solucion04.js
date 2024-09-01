// Solución propuesta para el Ejercicio 4

// 1. Usando `var`
for (var i = 0; i < 5; i++) {
    console.log(i); // Imprime 0, 1, 2, 3, 4
  }
  console.log(i); // Imprime 5 porque `var` tiene alcance de función
  
  // 2. Usando `let`
  for (let j = 0; j < 5; j++) {
    console.log(j); // Imprime 0, 1, 2, 3, 4
  }
  console.log(j); // Da un error porque `let` tiene alcance de bloque
  
  // 3. Usando `const`
  // for (const k = 0; k < 5; k++) {
  //   console.log(k); // Esto no funcionará porque `const` no permite reasignaciones
  // }
  