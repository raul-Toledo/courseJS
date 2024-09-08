function encontrarMayorPuntaje(tablero) {
    let mayor = null;
    let mayorPuntos = 0;
    for (let participante in tablero) {
        if (tablero[participante] > mayorPuntos) {
            mayor = participante;
            mayorPuntos = tablero[participante];
        }
    }
    return mayor;
}
