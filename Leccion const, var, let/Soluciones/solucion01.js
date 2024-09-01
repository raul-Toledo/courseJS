// Solución propuesta para el Ejercicio 1

function displayMessage() {
    var message = "Hello, World!";
    if (true) {
      let message = "Hello, JavaScript!";
      console.log(message); // Imprime "Hello, JavaScript!" debido al alcance de bloque de `let`.
    }
    console.log(message); // Imprime "Hello, World!" debido al alcance de función de `var`.
  }
  
  // Llama a la función
  displayMessage();
  