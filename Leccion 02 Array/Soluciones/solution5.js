// Solución Ejercicio 5
const espadas = [20, 60, 45, 80, 90, 30];
const numeroDeEspadasPotentes = espadas.reduce((contador, espada) => espada > 50 ? contador + 1 : contador, 0);
console.log(numeroDeEspadasPotentes); // 3
