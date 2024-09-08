function calcularPuntajeTotal(tablero) {
    return Object.values(tablero).reduce((total, puntos) => total + puntos, 0);
}
