

let imagen_arquero_derecha  = new Image ();
imagen_arquero_derecha.src = "./img/arquero.png";

let imagen_arquero_izquierda = new Image ();
imagen_arquero_izquierda.src = "./img/arqueroiz.png";


let arco = new Image ();
arco.src = "./img/arqueroarco1.png";






// let imagen_alas_1 = new Image();
// imagen_alas_1.src = "./anim/alas/alas1.png";

let imagen_alas_2 = new Image();
imagen_alas_2.src = "./anim/alas/alas2.png";
let imagen_alas_3 = new Image();
imagen_alas_3.src = "./anim/alas/alas3.png";
let imagen_alas_4 = new Image();
imagen_alas_4.src = "./anim/alas/alas4.png";





















let arco_disparando = new Image();
arco_disparando.src = "./img/arqueroarco2.png";


 let sonido_disparo_arco = document.createElement("audio");
 sonido_disparo_arco.volume = 0.4;
 
 sonido_disparo_arco.src = "./sounds/sonido_disparo_arco1.mp3";


 let sondio_recibir_flechazo_armadura = document.createElement("audio");
 sondio_recibir_flechazo_armadura.volume = 0.4;
 
 sondio_recibir_flechazo_armadura.src = "./sounds/sondio_recibir_flechazo_armadura.mp3";
 
 
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
    "vida" : 425 + (2* Stats.arquero.vitalidad),
    "posicion_x": 20,
    "posicion_y": 320 ,
    "damage": 50  + (3 * Stats.arquero.agilidad),
    "defensa": 25 + (1.25 * Stats.arquero.agilidad),
    "evasion": calcularEvasion_arquero(),
    


    w: 100,
    h: 100,
    

    "muerto": false
    

};



function calcularEvasion_arquero() {

  let evasion = (Stats.arquero.agilidad / 10);
  
    return evasion;

}

console.log(Arquero.damage); 
console.log(Arquero.defensa);
console.log(Arquero.evasion);





