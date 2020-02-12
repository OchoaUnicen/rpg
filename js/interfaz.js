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

    "contenedor_interfaz": imagen_contenedor_interfaz,
    "imagen_1vs1": imagen_1vs1,
    "imagen_1vs1_mouseover" : imagen_1vs1_mouse_over,    
    "imagen_coop": imagen_coop,
    "imagen_coop_mouseover": imagen_coop_mouse_over,
    "imagen_reset": imagen_reset,
    "mod":"pendiente",
    "estado": "visible"

}

