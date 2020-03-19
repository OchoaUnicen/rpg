let imagen_1vs1 = new Image();
imagen_1vs1.src = "./img/interfaz/1vs1.png";


let imagen_coop = new Image();
imagen_coop.src = "./img/interfaz/coop.png";



let imagen_reset = new Image();
imagen_reset.src = "./img/interfaz/reset.png";

let imagen_1vs1_mouse_over = new Image();
imagen_1vs1_mouse_over.src= "./img/interfaz/1vs1_mouseover.png"


let imagen_coop_mouse_over = new Image();
imagen_coop_mouse_over.src = "./img/interfaz/coop_mouseover.png"

let imagen_contenedor_interfaz = new Image();
imagen_contenedor_interfaz.src = "./img/interfaz/imagen_contenedor_interfaz.png"


let imagen_single = new Image();
imagen_single.src = "./img/interfaz/single.png";



let imagen_single_mouseover = new Image();
imagen_single_mouseover.src = "./img/interfaz/single_mouseover.png"




let imagen_inventario = new Image();
imagen_inventario.src = "./img/interfaz/interfaz_personaje/inventario.png"



let imagen_barras_hp_mp = new Image();
imagen_barras_hp_mp.src = "./img/interfaz/interfaz_personaje/interfaz_hp_mp.png";


let imagen_equipamiento_stats = new Image();
imagen_equipamiento_stats.src = "./img/interfaz/interfaz_personaje/equipamiento_stats.png";

let imagen_barra_exp = new Image();
imagen_barra_exp.src = "./img/interfaz/interfaz_personaje/barra_exp.png";



let imagen_boton_musica_on = new Image();
imagen_boton_musica_on.src = "./img/interfaz/imagen_boton_musica_on.png";

let imagen_boton_musica_off = new Image();
imagen_boton_musica_off.src = "./img/interfaz/imagen_boton_musica_off.png";

let imagen_boton_agregar_puntos = new Image();
imagen_boton_agregar_puntos.src = "./img/interfaz/interfaz_personaje/boton_agregar_puntos.png";

let imagen_boton_agregar_puntos_onclick = new Image();
imagen_boton_agregar_puntos_onclick.src = "./img/interfaz/interfaz_personaje/boton_agregar_puntos_onclick.png";
// let boton_1vs1 = document.createElement("button");
// boton_1vs1.setAttribute("id", "boton_1vs1");
// boton_1vs1.innerHTML = "1vs1";
// boton_1vs1.addEventListener('click', function() {


//     alert("anda");
// });


// let boton_coop = document.createElement("button");
// boton_coop.setAttribute("id", "boton_coop");
// boton_coop.innerHTML = "Co-op";
// boton_coop.addEventListener('click', function() {


//     alert("anda2");
// });


//  document.body.appendChild(boton_1vs1);
//  document.body.appendChild(boton_coop);


 Interfaz = {

    "mod":"pendiente",
    "estado": "visible",

    "contenedor_interfaz": {
        "imagen": imagen_contenedor_interfaz,
        posX: 330,
        posY: 10
    },
    "boton_single": {
        "imagen":  imagen_single,
        posX: 370,
        posY: 55,
        "imagen_mouseover": imagen_single_mouseover
    },
   
    "boton_1vs1": {
        "imagen":  imagen_1vs1,
        posX: 370,
        posY: 148,
        "imagen_mouseover": imagen_1vs1_mouse_over
    },
   
    "boton_coop": {
        "imagen":  imagen_coop,
        posX: 370,
        posY: 241,
        "imagen_mouseover": imagen_coop_mouse_over
    },
    
    "imagen_reset": {
        "imagen":  imagen_reset,
        posX: 370,
        posY: 20,
        "imagen_mouseover": null
    },


    "imagen_barras_hp_mp" : {
        "imagen": imagen_barras_hp_mp,
        posX: 1,
        posY: 1

    },

    "imagen_equipamiento_stats" : {

        "imagen": imagen_equipamiento_stats,
        posX: 100,
        posY: 100

    },

    "imagen_barra_exp" : {


        
        "imagen": imagen_barra_exp,
        posX: 49,
        posY: 47
        
    },


    "musica" : {


        
        "imagen_boton_on": { 
        imagen: imagen_boton_musica_on,
        posX: 923,
        posY: 10
        },

        "imagen_boton_off": {
        imagen: imagen_boton_musica_off,
        posX: 923,
        posY: 10
        }
    },

    "boton_agregar_puntos": {
        "imagen_boton_agregar_puntos": imagen_boton_agregar_puntos,
        "imagen_boton_agregar_puntos_onclick": imagen_boton_agregar_puntos_onclick,
        "fuerza_posicion_x": 537,
        "fuerza_posicion_y": 310,
        "agilidad_posicion_x": 537,
        "agilidad_posicion_y": 337,
        "vitalidad_posicion_x": 537,
        "vitalidad_posicion_y": 364,
        "inteligencia_posicion_x": 537,
        "inteligencia_posicion_y": 390,

    }
    
   
    
    
    
    

}

