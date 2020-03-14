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

    }
    
    
    
    
    
    

}

