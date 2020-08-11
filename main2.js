console.log("Hola mundo");

let vidaJugadorA = 10;
let vidaJugadorB = 10;

let ataqueJugadorA =Math.floor( Math.random() * (6 - 1)) + 1;
let ataqueJugadorB = Math.floor(Math.random() * (5 - 2)) + 2;

let turno = 1;

let finDelJuego = false;

while (finDelJuego === false) {



if (vidaJugadorA > 0 && vidaJugadorB >0) {/* Logica */
    let ataqueJugadorA =Math.floor( Math.random() * (6 - 1)) + 1;
    let ataqueJugadorB = Math.floor(Math.random() * (5 - 2)) + 2;


if (turno === 1) {
    /* Ambos jugadores estan vivos */
    /* Ataca jugador A */
    vidaJugadorB = vidaJugadorB - ataqueJugadorA;
    turno = 0;
    console.log("Jugador A hizo " + ataqueJugadorA + " puntos de daño");
    console.log("Vidas de Jugador B = " + vidaJugadorB);
} else {
    /* Ataca jugador B */
    vidaJugadorA = vidaJugadorA - ataqueJugadorB;
    turno = 1;
    console.log("Jugador B hizo " + ataqueJugadorB +" puntos de daño");
    console.log("Vidas del Jugador A = " + vidaJugadorA);
}

} else {
    /* logica */
    if (vidaJugadorA <= 0 &&  vidaJugadorB > 0 ) {
        /* Gana jugador B */
        console.log ("Gana jugador B");
    } else /* logica */
    if (vidaJugadorB <= 0 && vidaJugadorA > 0 ) 
    { /* Gana jugador A */
        console.log ("Gana jugador A");
    } else {
/* Empate*/
console.log("No gana ninguno");
}

finDelJuego = true;
}
}