// Solución propuesta para el Ejercicio 5

const funcs = [];

// Usando `var`
for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i); // Imprime 3, 3, 3 porque `var` tiene alcance de función
  });
}

funcs.forEach(func => func()); // Ejecuta las funciones almacenadas

// Usando `let`
const funcsLet = [];

for (let j = 0; j < 3; j++) {
  funcsLet.push(function() {
    console.log(j); // Imprime 0, 1, 2 porque `let` tiene alcance de bloque
  });
}

funcsLet.forEach(func => func()); // Ejecuta las funciones almacenadas
