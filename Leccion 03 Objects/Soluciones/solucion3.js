function removerParticipante(tablero, nombre) {
    delete tablero[nombre];
    return tablero;
}
