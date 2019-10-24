

let imagen_arquero_derecha  = new Image ();
imagen_arquero_derecha.src = "./img/arquero.png";

let imagen_arquero_izquierda = new Image ();
imagen_arquero_izquierda.src = "./img/arqueroiz.png";


let arco = new Image ();
arco.src = "./img/arqueroarco1.png";



let arco_disparando = new Image();
arco_disparando.src = "./img/arqueroarco2.png";


 let sonido_disparo_arco = document.createElement("audio");
 sonido_disparo_arco.volume = 0.4;
 
 sonido_disparo_arco.src = "./sounds/sonido_disparo_arco1.mp3";
 
 
 
 //sonido_disparo_arco.src = "./sounds/test_sound.mp3";
 
 
 
 
 
 
 console.log("sonido_disparo_arco: "+sonido_disparo_arco);
   console.log("y su src: " + sonido_disparo_arco.src);
 //sonido_disparo_arco = new sound("./sounds/disparo_arco.m4a");





 
// 
// sonido_disparo_arco.src = "./sounds/disparo_arco.m4a";


// console.log("sonido_disparo_arco: "+sonido_disparo_arco);


let Arquero = {


    "nombre" : "Arquero",
    "imagen_derecha" : imagen_arquero_derecha,
    "imagen_izquierda": imagen_arquero_izquierda,
    "vida" : 100,
    "posicion_x": 20,
    "posicion_y": 320 



}


