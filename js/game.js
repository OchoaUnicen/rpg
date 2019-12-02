document.addEventListener('DOMContentLoaded', cargar_game_js);

function cargar_game_js() {

    "use strict";
    //compatibilidad con multiples navegadores
    let frame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    let canvas = document.getElementById('lienzo');
    let context = canvas.getContext('2d'); 

    let velocidad = 0;
    let velocidad_guerrero = 0;

    //---------------------------------

    cargarTeclas();

    const LIMITE_IZQUIERDO = 0;
    const LIMITE_DERECHO = 910;
    const LIMITE_INFERIOR = 370;




    let fondo = new Image();
    fondo.src = "./img/fondo.png";

    const mapa = crearMatriz(100, 50);

    var laserTotal = 6, lasers = [];


    function crearMatriz(w, h) {
        const matriz = [];
        while (h--) {
            matriz.push(new Array(w).fill(0));

        }
        return matriz;
    }


    let direccion = "derecha";
    let direccion_guerrero = "izquierda";


    //#########################EN ACTUALIZACION SISTEMA MOVIMIENTO ##############


    document.addEventListener('keydown', (e) => {
    Teclas[e.keyCode] = true

        //console.log("tecla apretada");
        //console.log(Teclas[e.keyCode]);
    });

    // document.addEventListener('keydown', event => {



    //###############FIN#######EN ACTUALIZACION SISTEMA MOVIMIENTO ##############

    let limite_aceleracion = 5;


    // function acelerar(event) {


    //     if (event.keyCode == 37) {
    //         //flecha <-


    //         if (velocidad_guerrero < limite_aceleracion) {

    //             velocidad_guerrero = velocidad_guerrero + 2;
    //         }



    //         Guerrero.posicion_x -= velocidad_guerrero;
    //     }
    //     if (event.keyCode == 39) {
    //         //Flecha derecha ->


    //         if (velocidad_guerrero < limite_aceleracion) {

    //             velocidad_guerrero = velocidad_guerrero + 2;
    //         }



    //         Guerrero.posicion_x += velocidad_guerrero;
    //         //console.log("velocidad guerrero: "+velocidad_guerrero);
    //     }


    // }


    //#########################EN ACTUALIZACION SISTEMA MOVIMIENTO ##############


    document.addEventListener('keyup', (e) => {
    Teclas[e.keyCode] = false


        //  console.log(Teclas[e.keyCode]);

    });


    document.addEventListener('keyup', event => {

        if (event.keyCode == 74) {

            //j


            arco.src = "./img/arqueroarco1.png";

        }

    });

    //###############################GRAVEDAD#########################

    function gravedad() {

        // console.log(posicion_jugador_y);



        if (Arquero.posicion_y < LIMITE_INFERIOR) {
            Arquero.posicion_y += 2;



            //3* GRAVEDAD * (TIEMPO_AL_CUADRADO);

        }

        if (Guerrero.posicion_y < LIMITE_INFERIOR) {

            Guerrero.posicion_y += 2;

        }


    }

    //###############################FIN##GRAVEDAD#########################
    //##



    function drawLaser() {
        for (var i = 0; i < lasers.length; i++) {
            context.fillStyle = '#f00';
            context.fillRect(lasers[i].x, lasers[i].y, lasers[i].w, lasers[i].h)
        }
    }


    function moveLaser() {

        for (var i = 0; i < lasers.length; i++) {
            let borrar = false;

            if (lasers[i].dir == "izquierda") {
                if (lasers[i].x > LIMITE_IZQUIERDO) {
                    lasers[i].x -= 10;

                    if (Guerrero.vida > 0 && (lasers[i].x >= Guerrero.posicion_x &&
                        lasers[i].x <= (Guerrero.posicion_x + Guerrero.w)) && lasers[i].y - 50 == Guerrero.posicion_y) {
             
                        console.log("Damage: " + (Arquero.damage - Guerrero.defensa));
                        //getRandomInt(69);
                        Guerrero.vida -= Arquero.damage - Guerrero.defensa; 

                        sondio_recibir_flechazo_armadura.play();

                        //console.log("damage: " + damage);

                        if (Guerrero.vida < 0) {
                            Guerrero.vida = 0;
                            Guerrero.muerto = true;
                        }

                        // Borramos el laser.
                        borrar = true;
                    }
                } else if (lasers[i].x < LIMITE_IZQUIERDO + 1) {
                    borrar = true;
                }
            } else {
                if (lasers[i].x < canvas.width) {
                    lasers[i].x += 10;

                    if (Guerrero.vida > 0 && (lasers[i].x >= Guerrero.posicion_x &&
                        lasers[i].x <= (Guerrero.posicion_x + Guerrero.w)) &&
                        lasers[i].y - 50 == Guerrero.posicion_y) {
 
                        Guerrero.vida -= Arquero.damage - Guerrero.defensa; 


                        sondio_recibir_flechazo_armadura.play();

                            console.log("damage: "+ (Arquero.damage - Guerrero.defensa));

                        if (Guerrero.vida < 0) {
                            Guerrero.vida = 0;
                            Guerrero.muerto = true;
                        }

                        // Borramos el laser.
                        borrar = true;
                    }
                }
                else if (lasers[i].x > canvas.width -1) {
                    //console.log(lasers[i].x);
                    borrar = true;
                }
            }

            if (borrar)
                lasers.splice(i, 1);
        }

    }

    function createText(text_string, color_string, target) {
        var text_miss = new createjs.Text(text_string, "48px VT323", color_string);

        //delay before the text appears
        setTimeout(function () {
            stage.addChild(text_miss);
        }, 400); //# of frames when parry happens

        displayTextArray.push(text_miss);


        text_miss.x = target.x - 25;
    }

    //==TextUpdate==========
    //tweens each text from the array and animates and once complete will delete
    function updateText(textArray) {
        if (textArray.length > 0) {
            for (var i = 0; i < textArray.length; i++) {
                createjs.Tween.get(textArray[i])
                    .wait(400)

                    .to({ scaleX: 1.2, scaleY: 1.2 }, 400)
                    .to({ alpha: 0, visible: false }, 800)
                    .call(handleComplete);
                function handleComplete() {
                    textArray.splice(i, 1); //removes the text from the array
                }
            }
        }
    }
    //








    // function draw_healthbar(x, y, personaje_hp, width, thickness) {
    //     context.beginPath();
    //     context.rect(x - width / 2, y, width * (personaje_hp / 100), thickness);




    //     if (personaje_hp > 63) {
    //         context.fillStyle = "green"
    //     } else if (personaje_hp > 37) {
    //         context.fillStyle = "gold"
    //     } else if (personaje_hp > 13) {
    //         context.fillStyle = "orange";
    //     } else {
    //         context.fillStyle = "red";
    //     }
    //     context.closePath();
    //     context.fill();
    // }


    let laser_posicion_y;
    let direccion_disparo;


    let cooldown_habilidad_arco = 0;

    function actualizarMovimientosPesronajes() {

        if (Teclas[tecla.letra_j] == true && lasers.length <= laserTotal && Arquero.muerto == false) {
            //letra j


            if (disparo_cooldown == 0) {



                direccion_disparo = direccion;
                console.log(direccion_disparo);


                arco.src = arco_disparando.src;



                sonido_disparo_arco.play();


                laser_posicion_y = Arquero.posicion_y + 50;

                //console.log(laser_posicion_y);
                //posicion Y de laser disparado



                if (direccion_disparo == "derecha") {

                    lasers.push({
                        x: Arquero.posicion_x + 40,
                        y: laser_posicion_y,
                        w: 20,
                        h: 4,
                        dir: "derecha"
                    });


                }

                else if (direccion_disparo == "izquierda") {

                    lasers.push({
                        x: Arquero.posicion_x - 40,
                        y: laser_posicion_y,
                        w: 20,
                        h: 4,
                        dir: "izquierda"
                    });
                }




                if (habilidad_arquero_activada == true) {

                    disparo_cooldown = 150;


                }


                else if (habilidad_arquero_activada == false) {

                    disparo_cooldown = 300;


                }


                
            }


        }
/*
        if(!Arquero.muerto){
            switch (Teclas == true) {
                case tecla.letra_d:
                    alert("asd")
                    if(Arquero.posicion_x < LIMITE_DERECHO){
                        direccion = "derecha";
                        //console.log("derecha true");

                        //console.log(Arquero.posicion_x);
                        if (velocidad < limite_aceleracion) {
                            velocidad = velocidad + 1;
                        }

                    Arquero.posicion_x += velocidad;

                    };    
                break;
        
                case tecla.letra_a:
                    if(Arquero.posicion_x > LIMITE_IZQUIERDO){
                        direccion = "izquierda";
                        //console.log(direccion);

                        if (velocidad < limite_aceleracion) {
                            velocidad = velocidad + 1;
                        }
                        Arquero.posicion_x -= velocidad;
                    }
                break;
                
                case tecla.letra_w:
                    //Tecla W - Saltar
                    if (Arquero.posicion_y == LIMITE_INFERIOR) {

                        Arquero.posicion_y -= 50;
                        if (direccion == "derecha" && Arquero.posicion_x < LIMITE_DERECHO - 15) {
                            Arquero.posicion_x += 15
                        }
                        if (direccion == "izquierda" && Arquero.posicion_x > LIMITE_IZQUIERDO + 15) {
                            Arquero.posicion_x -= 15;
                        }
                    }        
         }
        }

*/  if(!Arquero.muerto){
        
    if (Teclas[tecla.letra_d] == true && Arquero.posicion_x < LIMITE_DERECHO) {
        // Derecha

        direccion = "derecha";
        //console.log("derecha true");

        //console.log(Arquero.posicion_x);
        if (velocidad < limite_aceleracion) {

            velocidad = velocidad + 1;

        }

        Arquero.posicion_x += velocidad;

    }

    if (Teclas[tecla.letra_a] == true &&  Arquero.posicion_x > LIMITE_IZQUIERDO) {
        //Izquierda

        direccion = "izquierda";
        //console.log(direccion);

        if (velocidad < limite_aceleracion) {

            velocidad = velocidad + 1;

        }
        Arquero.posicion_x -= velocidad;
    }

    if (Teclas[tecla.letra_w] == true) {
        //Tecla W - Saltar
        if (Arquero.posicion_y == LIMITE_INFERIOR) {

            Arquero.posicion_y -= 50;
            if (direccion == "derecha" && Arquero.posicion_x < LIMITE_DERECHO - 15) {
                Arquero.posicion_x += 15
            }

<<<<<<< HEAD
            if (direccion == "izquierda" && Arquero.posicion_x > LIMITE_IZQUIERDO + 15) {
                Arquero.posicion_x -= 15;
            }
=======
        if (Teclas[tecla.letra_l] == true && Arquero.muerto == false) {
            console.log(dash_arquero_cooldown);

            if (dash_arquero_cooldown == 0) {



                if (direccion == "derecha" && Arquero.posicion_x > LIMITE_IZQUIERDO + 15) {

                    
                Arquero.posicion_x -= 15;
                Arquero.posicion_y -= 5;

                }

                
                if (direccion == "izquierda" && Arquero.posicion_x < LIMITE_DERECHO - 15) {

                    
                    Arquero.posicion_x += 15;
                    Arquero.posicion_y -= 5;
    
                    }

                

            }



        }









        if (Teclas[tecla.letra_k] == true && Arquero.muerto == false) {

           

            if (cooldown_habilidad_arco == 0) {


                console.log("anda");

                habilidad_arquero_activada = true;


                cooldown_habilidad_arco = 1900;


            }          



       



>>>>>>> cf8c4f6cdf8d21613c2e0701c7b61e4e19cc7968

        }

    }

    if (Teclas[tecla.letra_k] == true) {
        if (cooldown_habilidad_arco == 0) {

            console.log("anda");

            habilidad_arquero_activada = true;

            cooldown_habilidad_arco = 1900;

        }          

    }
}

        
        if (Teclas[tecla.flecha_arriba] == true && Guerrero.muerto == false) {
            //Tecla Flecha arriba - Saltar guerrero
            if (Guerrero.posicion_y == LIMITE_INFERIOR) {



                Guerrero.posicion_y -= 50;


                if (direccion_guerrero == "derecha" && Guerrero.posicion_x < LIMITE_DERECHO -15) {
                    Guerrero.posicion_x += 15
                }

                if (direccion_guerrero == "izquierda" && Guerrero.posicion_x > LIMITE_IZQUIERDO + 15) {
                    Guerrero.posicion_x -= 15;
                }


            }


        }

        if (Teclas[tecla.flecha_izq] == true && Guerrero.muerto == false && Guerrero.posicion_x > LIMITE_IZQUIERDO) {
            //Flecha Izquierda

            direccion_guerrero = "izquierda";
            //console.log("direccion guerrero: "+ direccion_guerrero);

            if (velocidad < limite_aceleracion) {

                velocidad = velocidad + 1;

            }


            Guerrero.posicion_x -= velocidad;

        }

        if (Teclas[tecla.flecha_der] == true && Guerrero.muerto == false && Guerrero.posicion_x < LIMITE_DERECHO) {
            //Flecha derecha

            direccion_guerrero = "derecha";
            //console.log("direccion guerrero: "+ direccion_guerrero);

            if (velocidad < limite_aceleracion) {

                velocidad = velocidad + 1;

            }


            Guerrero.posicion_x += velocidad;

        }


        if (Teclas[tecla.numpad1] == true && Guerrero.muerto == false) {

            if (cooldown_ataquebasico_hacha == 0) {


                atacarHacha();
            }
        }

    }




    let habilidad_arquero_activada = false;










    function atacarHacha() {
        //console.log(cooldown_ataquebasico_hacha);
        cooldown_ataquebasico_hacha = 300;








        //console.log(cooldown_ataquebasico_hacha);


        let distancia_arquero_guerrero_x = Math.abs(Guerrero.posicion_x - Arquero.posicion_x);
        let distancia_arquero_guerrero_y = Math.abs(Guerrero.posicion_y - Arquero.posicion_y);

        //console.log(Arquero.posicion_x + Arquero.w);




        //  console.log("cd hacha: "+cooldown_ataquebasico_hacha);
        // console.log("distancia en X: " +distancia_arquero_guerrero_x);
        // console.log("distancia en Y: " +distancia_arquero_guerrero_y);



        //  if (Arquero.vida > 0 && (distancia_arquero_guerrero_x >= (Arquero.posicion_x - Arquero.w) &&
        //     distancia_arquero_guerrero_x <= (Arquero.posicion_x + Arquero.w))
        //      && Guerrero.posicion_y == Arquero.posicion_y) {


        //         console.log("atacar");


        //     }       


        if (Arquero.vida > 0 && (distancia_arquero_guerrero_x <= 100 && distancia_arquero_guerrero_y <= 50)) {



            let damage_hacha = Guerrero.damage - Arquero.defensa;
            console.log(damage_hacha);
            //getRandomInt(69);
            Arquero.vida -= damage_hacha;




            sonido_recibir_hachazo1.play();

            //console.log("distancia cercana");



            if (Arquero.vida <= 0) {
                Arquero.vida = 0;

                Arquero.muerto = true;


            }

        }

        else {

            //console.log("demasiado lejos del objetivo");

        }


    }




    let disparo_cooldown = 0;
    let cooldown_ataquebasico_hacha = 0;
    let dash_arquero_cooldown = 0;




    let imagen_alas_1 = new Image();
imagen_alas_1.src = "./anim/alas/alas1.png";













    // function elegirMododeJuego() {





    //     if () {

    //         Interfaz.mod  = "1vs1";



    //     }




    //     else if () {


    //         Interfaz.mod  = "coop";


    //     }       



    // }





    function tiempo() {
        //hace ejecutar 60 veces por segundo
        frame(tiempo);
        gravedad();
        moveLaser();



       //draw_healthbar(Guerrero.posicion_x, Guerrero.posicion_y + 10, Guerrero.vida, Guerrero.vida);

        actualizarMovimientosPesronajes();
        //  if () {}    

       









        // console.log(laser_posicion_y);


        //ANIMACION ATAQUE HACHA GUERRERO

        if (cooldown_ataquebasico_hacha == 300) {

            //console.log("activo animacion: "+ cooldown_ataquebasico_hacha);

            hacha.src = ataque_hacha_mov_1.src;

            sonido_ataque_hacha.play();

        }


        if (cooldown_ataquebasico_hacha == 240) {

            //console.log("activo animacion: "+ cooldown_ataquebasico_hacha);

            hacha.src = ataque_hacha_mov_2.src;
        }

        if (cooldown_ataquebasico_hacha == 180) {

            hacha.src = ataque_hacha_mov_3.src;
            //console.log("activo animacion: "+ cooldown_ataquebasico_hacha);
        }
        if (cooldown_ataquebasico_hacha == 120) {
            hacha.src = ataque_hacha_mov_4.src;

            // console.log("activo animacion: "+cooldown_ataquebasico_hacha );
        }


        if (cooldown_ataquebasico_hacha == 60) {
            hacha.src = ataque_hacha_mov_3.src;

            // console.log("activo animacion: "+cooldown_ataquebasico_hacha );
        }

        if (cooldown_ataquebasico_hacha == 10) {

            hacha.src = ataque_hacha_mov_0.src;

        }





        //reduccion de cds de ataque hacha guerrero


        if (cooldown_ataquebasico_hacha > 0) {
            cooldown_ataquebasico_hacha = cooldown_ataquebasico_hacha - 10;


           // console.log(cooldown_ataquebasico_hacha);
        }







        //console.log(cooldown_ataquebasico_hacha);


        if (disparo_cooldown > 0) {
            disparo_cooldown = disparo_cooldown - 10;

            //console.log(disparo_cooldown);
        }







        if (cooldown_habilidad_arco > 0) {


            cooldown_habilidad_arco = cooldown_habilidad_arco -10;

            
        }
        




        //console.log(Arquero.posicion_y);
        //arrowCollision();






        //***********--*-*--*-**--*-***--*--**--*-**-*-*-*--* *-***-**--*-*-*----**--*-*/

        //  console.log("derecha estado: "+ Teclas[68]);
        //  console.log("izquierda estado: "+Teclas[65]);



        //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
        context.clearRect(0, 0, canvas.width, canvas.heigh);




        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);

       

        //console.log(cooldown_habilidad_arco);
         





        if (cooldown_habilidad_arco == 1890) {

            

           


                imagen_arquero_derecha.src = imagen_alas_1.src;
             
          


            

        }

        if (cooldown_habilidad_arco == 1830) {

            imagen_arquero_derecha.src = imagen_alas_2.src;
             
             
             
           

        }

        if (cooldown_habilidad_arco == 1770) {
            
            
            imagen_arquero_derecha.src = imagen_alas_3.src;
             
            
           
          

        }

        if (cooldown_habilidad_arco == 1710) {

            
            imagen_arquero_derecha.src = imagen_alas_4.src;
             
            
            

        }

        if (cooldown_habilidad_arco == 450) {

            
            imagen_arquero_derecha.src = "./img/arquero.png";
            habilidad_arquero_activada = false; 
            
            




        }

        
        
        




        



        if (direccion == "izquierda") {



            if (Arquero.vida <= 0) {
                context.save();

                context.translate(Arquero.posicion_x, Arquero.posicion_y);
                context.rotate(60 * Math.PI / 180);
                context.drawImage(Arquero.imagen_izquierda, Arquero.imagen_izquierda.width / 2, -Arquero.imagen_izquierda.width / 2);

                //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                // Reset transformation matrix to the identity matrix
                context.restore();

            }


            else {




                context.drawImage(Arquero.imagen_izquierda, Arquero.posicion_x, Arquero.posicion_y, Arquero.imagen_izquierda.naturalWidth, Arquero.imagen_izquierda.naturalHeight);


            }


        }

        if (direccion == "derecha") {


            if (Arquero.vida <= 0) {
                context.save();

                context.translate(Arquero.posicion_x, Arquero.posicion_y);
                context.rotate(60 * Math.PI / 180);
                context.drawImage(Arquero.imagen_derecha, Arquero.imagen_derecha.width / 2, -Arquero.imagen_derecha.width / 2);

                //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                // Reset transformation matrix to the identity matrix
                context.restore();

            }


            else {

                context.drawImage(Arquero.imagen_derecha, Arquero.posicion_x, Arquero.posicion_y, Arquero.imagen_derecha.naturalWidth, Arquero.imagen_derecha.naturalHeight);
            }
        }


        //dibuja el arco
        //context.drawImage(arco, Arquero.posicion_x + 3, Arquero.posicion_y +3, arco.naturalWidth, arco.naturalHeight);



        context.save();

        if (direccion == "izquierda") {
            context.translate(Arquero.posicion_x + (Arquero.w - 15), Arquero.posicion_y + 3);
            context.scale(-1, 1);
        } else {
            context.translate(Arquero.posicion_x + 3, Arquero.posicion_y + 3);
        }
        //context.drawImage(hacha, Guerrero.posicion_x + 3, Guerrero.posicion_y + 3, hacha.naturalWidth, hacha.naturalHeight);
        context.drawImage(arco, 0, 0);
        context.restore();




        if (direccion_guerrero == "izquierda") {

            if (Guerrero.vida <= 0) {
                context.save();

                context.translate(Guerrero.posicion_x, Guerrero.posicion_y);
                context.rotate(60 * Math.PI / 180);
                context.drawImage(Guerrero.imagen_izquierda, Guerrero.imagen_izquierda.width / 2, -Guerrero.imagen_izquierda.width / 2);

                //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                // Reset transformation matrix to the identity matrix
                context.restore();

            }
            else {
                context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
            }

        }


        if (direccion_guerrero == "derecha") {


            if (Guerrero.vida <= 0) {
                context.save();

                context.translate(Guerrero.posicion_x, Guerrero.posicion_y);
                context.rotate(60 * Math.PI / 180);
                context.drawImage(Guerrero.imagen_derecha, Guerrero.imagen_derecha.width / 2, -Guerrero.imagen_derecha.width / 2);



                //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                // Reset transformation matrix to the identity matrix
                context.restore();

            }
            else {
                context.drawImage(Guerrero.imagen_derecha, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_derecha.naturalWidth, Guerrero.imagen_derecha.naturalHeight);
            }
            //context.drawImage(Guerrero.imagen_derecha, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_derecha.naturalWidth, Guerrero.imagen_derecha.naturalHeight);

        }


        //dibuja el hacha
        context.save();

        if (direccion_guerrero == "izquierda") {
            context.translate(Guerrero.posicion_x + (Guerrero.w - 20), Guerrero.posicion_y - 3);
            context.scale(-1, 1);
        } else {
            context.translate(Guerrero.posicion_x + 9, Guerrero.posicion_y + 3);
        }
        //context.drawImage(hacha, Guerrero.posicion_x + 3, Guerrero.posicion_y + 3, hacha.naturalWidth, hacha.naturalHeight);
        context.drawImage(hacha, 0, 0);
        context.restore();















        // context.drawImage(Interfaz.imagen_1vs1, 100 ,100 , Interfaz.imagen_1vs1.naturalWidth, Interfaz.imagen_1vs1.naturalHeight);


        // context.drawImage(Interfaz.imagen_coop, 600, 100 , Interfaz.imagen_coop.naturalWidth, Interfaz.imagen_coop.naturalHeight);




        //context.font("60px");
        context.fillText("Guerrero Hp: " + Guerrero.vida, Guerrero.posicion_x, Guerrero.posicion_y - 30);


        context.fillText("Arquero Hp: " + Arquero.vida, Arquero.posicion_x, Arquero.posicion_y - 30);
        // console.log("posicion_jugador_x : " + posicion_jugador_x);
        // console.log("posicion_jugador_y : " + posicion_jugador_y);
        // console.log(tiempo);






       // context.drawImage(Mago.imagen_derecha, Mago.posicion_x, Mago.posicion_y, Mago.imagen_derecha.naturalWidth, Mago.imagen_derecha.naturalHeight);






        drawLaser();




        if (velocidad_guerrero > 0) {

            velocidad_guerrero = velocidad_guerrero - 0.4;


            if (direccion_guerrero == "izquierda") {

                Guerrero.posicion_x -= velocidad_guerrero;
            }


            if (direccion_guerrero == "derecha") {

                Guerrero.posicion_x += velocidad_guerrero;

            }



        }



        if (velocidad > 0) {
            velocidad = velocidad - 0.4;

        }


        //console.log(velocidad);
    }

    tiempo();

}
