
    let imagen_guerrero_derecha  = new Image ();
    imagen_guerrero_derecha.src = "./img/guerrero.png";
    
    let imagen_guerrero_izquierda = new Image ();
    imagen_guerrero_izquierda.src = "./img/guerreroiz.png";
   // console.log("imagen guerrero:   " + imagen_guerrero_png);



let Guerrero = {





    "nombre": "Guerrero",
    "imagen_derecha" : imagen_guerrero_derecha,
    "imagen_izquierda": imagen_guerrero_izquierda,
    "vida" : 100,
    "posicion_x": 650,
    "posicion_y": 360,


    
    w: 100,
    h: 100,
    
    muerto: false,
}




function atacarHacha () {

    let distancia_arquero_guerrero_x = Math.abs(Guerrero.posicion_x - Arquero.posicion_x);
    let distancia_arquero_guerrero_y = Math.abs(Guerrero.posicion_y - Arquero.posicion_y);

    	console.log(Arquero.posicion_x + Arquero.w);


   
    // console.log("distancia en X: " +distancia_arquero_guerrero_x);
    // console.log("distancia en Y: " +distancia_arquero_guerrero_y);



        //  if (Arquero.vida > 0 && (distancia_arquero_guerrero_x >= (Arquero.posicion_x - Arquero.w) &&
        //     distancia_arquero_guerrero_x <= (Arquero.posicion_x + Arquero.w))
        //      && Guerrero.posicion_y == Arquero.posicion_y) {


        //         console.log("atacar");


        //     }       


         if (Arquero.vida > 0 && (distancia_arquero_guerrero_x <= 100 && distancia_arquero_guerrero_y <= 50)) {

            console.log("atacar");

         }

else  {

    console.log("demasiado lejos del objetivo");

}

    
}

//console.log(Guerrero.imagen.naturalWidth);


//console.log(imagen_guerrero_png);