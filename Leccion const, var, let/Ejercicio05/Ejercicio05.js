// Ejercicio 5: Comprendiendo Closure con `let` y `var`

const funcs = [];

// Usando `var`
for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i); // ¿Qué valor esperas en cada llamada?
  });
}

funcs.forEach(func => func()); // Ejecuta las funciones almacenadas

// Usando `let`
const funcsLet = [];

for (let j = 0; j < 3; j++) {
  funcsLet.push(function() {
    console.log(j); // ¿Qué valor esperas en cada llamada?
  });
}

funcsLet.forEach(func => func()); // Ejecuta las funciones almacenadas
