let Teclas = new Array(255);

let tecla = {
    "letra_w": 87,
    "letra_a": 65,
    "letra_s": 83,
    "letra_d": 68,


    "letra_j": 74,
    "letra_k": 75,
    "letra_l": 76,

"flecha_izq": 37,
"flecha_der" :39,
"flecha_abajo": 40,
"flecha_arriba": 38,


"numpad1": 97,
"numpad2": 98,
"numpad3": 99,

"coma":188,
"punto":190,

"letra_i": 73


}
// KEYCODES 


//jugador 1 moves
// w 87
// a 65
// s 83
// d 68
//jugador 1 habilidades
// j 74
// k 75
// l 76


//jugador 2 moves
// flecha izq 37
//flecha der 39
//flecha abajo 40
//flecha arriba 38
//jugador 2 habilidades
// numpad1 97
// numpad2 98
// numpad3 99


// esc 27
// enter 13









// let controlesPersonaje1 = {


//     "saltar": "w"


// }







function cargarTeclas () {

    //console.log("entra");
    for (var i = 0 ; i < Teclas.length; i++) {
        Teclas[i] = false;
        
    }
}
