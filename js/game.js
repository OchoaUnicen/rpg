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
    context.font = "15px Verdana";

    let velocidad = 0;

    let velocidad_guerrero = 0;
    //---------------------------------
    cargarTeclas();
    const LIMITE_IZQUIERDO = 0;
    const LIMITE_DERECHO = 910;
    const LIMITE_INFERIOR = 370;

 
    let backgroundMusic = document.createElement("audio");
    backgroundMusic.src = "./sounds/sonido_background_wherema.wav";
    backgroundMusic.volume = 0.4;
    
    // backgroundMusic.pause();
    // setTimeout(function(){backgroundMusic.play(); }, 1500);
    backgroundMusic.load();
    backgroundMusic.loop = true;
    // setTimeout(function() {
    //     backgroundMusic.play();
    // }, 0);
  
    
          
   
  



  

   

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


    let inventarioCerrado = true;
    let estadisticasCerrado = true;
    document.addEventListener('keypress', (e) => {
        
        // Teclas[e.keyCode] = true;

        if (Interfaz.mod == "coop" || Interfaz.mod == "single" ) {

        if (Teclas[tecla.letra_i] && inventarioCerrado == false) {
                
            Arquero.interfaz.inventario_abierto = false;
            inventarioCerrado = true;
            console.log("cerro");
            //Arquero.interfaz.inventario_abierto = true;
           }

        else if (Teclas[tecla.letra_i] && inventarioCerrado) {
            Arquero.interfaz.inventario_abierto = true;
                inventarioCerrado = false;
                console.log("abrio");
            }  
            
            if (Teclas[tecla.letra_c] && estadisticasCerrado == false) {
                
                Arquero.interfaz.estadisticas_abierto = false;
                estadisticasCerrado = true;
                
               
               }
    
            else if (Teclas[tecla.letra_c] && estadisticasCerrado) {
                Arquero.interfaz.estadisticas_abierto = true;
                estadisticasCerrado = false;
                   
                }  





        

        }
    });


    document.addEventListener('keyup', (e) => {
    Teclas[e.keyCode] = false
        //  console.log(Teclas[e.keyCode]);
    });
    document.addEventListener('keyup', event => {
        if (event.keyCode == 74) {
            //j
            arco.src = "./img/arqueroarco1.png";
        }

        // if (event.keyCode === 73) {
        //     console.log("letra I");
        //     Arquero.interfaz.inventario_abierto = false;

        // }


    });

    //###############################GRAVEDAD#########################
    let gravedad_arquero_off = false;
    function gravedad() {
        // console.log(posicion_jugador_y);

        


        if (Arquero.posicion_y < LIMITE_INFERIOR && gravedad_arquero_off == false) {
            Arquero.posicion_y += 2;

            //3* GRAVEDAD * (TIEMPO_AL_CUADRADO);

        }

        if (Guerrero.posicion_y < LIMITE_INFERIOR) {

            Guerrero.posicion_y += 2;

        }

        if (spider.posicion_y < LIMITE_INFERIOR && (Interfaz.mod == "coop" || Interfaz.mod == "single" ) && Escenarios.escenario_actual == "escenario_3") {

            spider.posicion_y +=6;

        }


    }

    //###############################FIN##GRAVEDAD#########################
    //##



    function drawLaser() {
        for (var i = 0; i < lasers.length; i++) {
            //context.fillStyle = '#f00';


            if (lasers[i].dir == "derecha") {

                context.drawImage(imagen_flecha_derecha, lasers[i].x, lasers[i].y, imagen_flecha_derecha.naturalWidth /2, imagen_flecha_derecha.naturalHeight /2);
            }

            else if (lasers[i].dir == "izquierda") {

             
                context.drawImage(imagen_flecha_izquierda, lasers[i].x, lasers[i].y, imagen_flecha_izquierda.naturalWidth /2, imagen_flecha_izquierda.naturalHeight /2);
                
            }
           
            //context.fillRect(lasers[i].x, lasers[i].y, lasers[i].w, lasers[i].h)
        }
    }


    function moveLaser() {

        for (var i = 0; i < lasers.length; i++) {
            let borrar = false;
            

            //lasers[i].y +=4.98;

            if (lasers[i].dir == "izquierda") {
                if (lasers[i].x > LIMITE_IZQUIERDO) {
                    lasers[i].x -= 10;

                    if (Guerrero.vida > 0 && (lasers[i].x >= Guerrero.posicion_x &&
                        lasers[i].x <= (Guerrero.posicion_x + Guerrero.w)) && lasers[i].y - 50 == Guerrero.posicion_y && Interfaz.mod == "1vs1") {
             
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





                    if (spider.hp > 0 && (lasers[i].x >= spider.posicion_x &&
                        lasers[i].x <= (spider.posicion_x + 20)) && (lasers[i].y == spider.posicion_y + 46) && (Interfaz.mod == "coop" || Interfaz.mod == "single")
                        && Escenarios.escenario_actual == "escenario_3") {
                            //lasers[i].y - 50 == Guerrero.posicion_y
                        //console.log("Damage: " + (Arquero.damage - Guerrero.defensa));
                        //getRandomInt(69);

                        // console.log("lase pos y: " + lasers[i].y);
                        // console.log("spider pos y: " + spider.posicion_y);
                        spider.hp -= Arquero.damage; 

                        sondio_recibir_flechazo_armadura.play();

                        //console.log("damage: " + damage);

                        

                        if (spider.hp <= 0) {
                            spider.hp = 0;
                            spider.muerto = true;
                            // spider.dropObject();
                            Arquero.exp += spider.exp;
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
                        lasers[i].y - 50 == Guerrero.posicion_y && Interfaz.mod == "1vs1") {
 
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

                    console.log("lase pos y: " + lasers[i].y);
                    console.log("spider pos y: " + spider.posicion_y);
                    if (spider.hp > 0 && (lasers[i].x >= spider.posicion_x &&
                        lasers[i].x <= (spider.posicion_x + 20))&& (lasers[i].y == spider.posicion_y + 46) && (Interfaz.mod == "coop" || Interfaz.mod == "single" ) &&
                        Escenarios.escenario_actual == "escenario_3") {
                            //lasers[i].y - 50 == Guerrero.posicion_y
                        //console.log("Damage: " + (Arquero.damage - Guerrero.defensa));
                        //getRandomInt(69);
                        spider.hp -= Arquero.damage; 
                        
                        sondio_recibir_flechazo_armadura.play();

                        //console.log("damage: " + damage);



                        
                        if (spider.hp < 0) {
                            spider.hp = 0;
                            spider.muerto = true;
                            Arquero.exp += spider.exp;
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

        if (Interfaz.mod == "coop" || Interfaz.mod == "1vs1" || Interfaz.mod == "single" ) {
            



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

*/  if(!Arquero.muerto && Arquero.estado == "funcional"){
        
    if (Teclas[tecla.letra_d] == true && Arquero.posicion_x < LIMITE_DERECHO) {
        // Derecha

        direccion = "derecha";
        //console.log("derecha true");

        //console.log(Arquero.posicion_x);

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
        if (Arquero.posicion_y == LIMITE_INFERIOR || gravedad_arquero_off == true) {

            Arquero.posicion_y -= 50;
            if (direccion == "derecha" && Arquero.posicion_x < LIMITE_DERECHO - 15) {
                Arquero.posicion_x += 15
            }

            if (direccion == "izquierda" && Arquero.posicion_x > LIMITE_IZQUIERDO + 15) {
                Arquero.posicion_x -= 15;
            }
            //subir escalera
        }else if (Escenarios.escenario_actual == "escenario_3" && (Arquero.posicion_x >= Escenarios.escenario_3.escalera.posicion_x &&Arquero.posicion_x <= Escenarios.escenario_3.escalera.posicion_x + Escenarios.escenario_3.escalera.w 
            && (Arquero.posicion_y <= Escenarios.escenario_3.escalera.posicion_y + Escenarios.escenario_3.escalera.h   && Arquero.posicion_y >= Escenarios.escenario_3.escalera.posicion_y - Arquero.h )) ) {
            Arquero.posicion_y -= 4;

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

        
        if (Teclas[tecla.flecha_arriba] == true && Guerrero.muerto == false && Interfaz.mod != "single") {
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

        if (Teclas[tecla.flecha_izq] == true && Guerrero.muerto == false && Interfaz.mod != "single" && Guerrero.posicion_x > LIMITE_IZQUIERDO) {
            //Flecha Izquierda

            direccion_guerrero = "izquierda";
            //console.log("direccion guerrero: "+ direccion_guerrero);

            if (velocidad < limite_aceleracion) {

                velocidad = velocidad + 1;

            }


            Guerrero.posicion_x -= velocidad;

        }

        if (Teclas[tecla.flecha_der] == true && Guerrero.muerto == false && Interfaz.mod != "single" && Guerrero.posicion_x < LIMITE_DERECHO) {
            //Flecha derecha

            direccion_guerrero = "derecha";
            //console.log("direccion guerrero: "+ direccion_guerrero);

            if (velocidad < limite_aceleracion) {

                velocidad = velocidad + 1;

            }


            Guerrero.posicion_x += velocidad;

        }


        if (Teclas[tecla.numpad1] == true || Teclas[tecla.coma] == true  && Guerrero.muerto == false) {

            if (cooldown_ataquebasico_hacha == 0  && Interfaz.mod != "single") {


                atacarHacha();
            }
        }

       



        if (Teclas[tecla.numpad2]== true || Teclas[tecla.punto] == true && Guerrero.muerto == false  && cooldown_guerrero_stun == 0) {


            if(Interfaz.mod != "single") {
                guerreroStunnear();
            }

         



        }


        
        }

    }




    let habilidad_arquero_activada = false;



    let cooldown_guerrero_stun = 0;
    let efecto_stun = 0;
    function guerreroStunnear() {
        
        //************************1000 */
        cooldown_guerrero_stun = 4000;
        cooldown_ataquebasico_hacha = 300;
        console.log("stun");

        let distancia_arquero_guerrero_x = Math.abs(Guerrero.posicion_x - Arquero.posicion_x);
        let distancia_arquero_guerrero_y = Math.abs(Guerrero.posicion_y - Arquero.posicion_y);

        if (Arquero.vida > 0 && (distancia_arquero_guerrero_x <= 100 && distancia_arquero_guerrero_y <= 50) && Interfaz.mod == "1vs1") {

           
            //console.log(damage_hacha);
            //getRandomInt(69);
            Arquero.estado = "stunneado";


            console.log(Arquero.estado);
            //sonido_recibir_hachazo1.play();

            //console.log("distancia cercana");
           
            efecto_stun = 600;

        }

       
        console.log("cd stun" +cooldown_guerrero_stun);


    }








    function atacarHacha() {
        //console.log(cooldown_ataquebasico_hacha);
        cooldown_ataquebasico_hacha = 300;

        //console.log(cooldown_ataquebasico_hacha);


        let distancia_arquero_guerrero_x = Math.abs(Guerrero.posicion_x - Arquero.posicion_x);
        let distancia_arquero_guerrero_y = Math.abs(Guerrero.posicion_y - Arquero.posicion_y);
        let distancia_guerrero_spider_x = Math.abs(Guerrero.posicion_x - spider.posicion_x);
        //console.log(Arquero.posicion_x + Arquero.w);




        //  console.log("cd hacha: "+cooldown_ataquebasico_hacha);
        // console.log("distancia en X: " +distancia_arquero_guerrero_x);
        // console.log("distancia en Y: " +distancia_arquero_guerrero_y);



        //  if (Arquero.vida > 0 && (distancia_arquero_guerrero_x >= (Arquero.posicion_x - Arquero.w) &&
        //     distancia_arquero_guerrero_x <= (Arquero.posicion_x + Arquero.w))
        //      && Guerrero.posicion_y == Arquero.posicion_y) {


        //         console.log("atacar");


        //     }       


        if (Arquero.vida > 0 && (distancia_arquero_guerrero_x <= 100 && distancia_arquero_guerrero_y <= 50) && Interfaz.mod == "1vs1") {
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


        if (spider.hp > 0 && (distancia_guerrero_spider_x <= 100 ) && Interfaz.mod == "coop" &&
        Escenarios.escenario_actual == "escenario_3") {
            let damage_hacha = Guerrero.damage;
            //console.log(damage_hacha);
            //getRandomInt(69);
            spider.hp -= damage_hacha;
            sonido_recibir_hachazo1.play();
            //console.log("distancia cercana");
            if (spider.hp <= 0) {
                spider.hp = 0;
                spider.muerto = true;
                Guerrero.exp += spider.exp;
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

    canvas.onmousemove = function (evt) {


        var mouseoverPos = getMousePos(canvas, evt);

        //console.log("x: " +mouseoverPos.x, "y: " + mouseoverPos.y);

        if ((mouseoverPos.x <= 600 && mouseoverPos.x >=383) && mouseoverPos.y >= 160 && mouseoverPos.y <= 223 && Interfaz.estado === "visible" ) {
            
           Interfaz.boton_1vs1.imagen.src = imagen_1vs1_mouse_over.src; 
        }

        else {

            Interfaz.boton_1vs1.imagen.src = "./img/interfaz/1vs1.png"

        }

        if ((mouseoverPos.x <= 603 && mouseoverPos.x >=383) && mouseoverPos.y >=250 && mouseoverPos.y <= 318  && Interfaz.estado === "visible" ) {
            
            Interfaz.boton_coop.imagen.src = imagen_coop_mouse_over.src; 
         }
 
         else {
 
             Interfaz.boton_coop.imagen.src = "./img/interfaz/coop.png"
 
         }

         if ((mouseoverPos.x <= 603 && mouseoverPos.x >=383) && mouseoverPos.y >=65 && mouseoverPos.y <= 123  && Interfaz.estado === "visible" ) {
            
            Interfaz.boton_single.imagen.src = Interfaz.boton_single.imagen_mouseover.src; 
         }
 
         else {
 
             Interfaz.boton_single.imagen.src = "./img/interfaz/single.png"
 
         }

    }


    let mostrarBarras_hp = false;
    let mostrarBarras_mp = false;
    let mostrarBarras_exp = false;


    let background_music_isPlaying = false;
    let musica_turned_off = false;
    canvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvas, evt);



        if (Guerrero.muerto == false && Interfaz.estado !== "visible" && Interfaz.mod != "single") {

            if (cooldown_ataquebasico_hacha == 0) {


                atacarHacha();
            }
        }


        if (background_music_isPlaying === false) {
          
         
                backgroundMusic.play();
           
            if (musica_turned_off == false) {
                background_music_isPlaying = true;
            }

           
        }

        //console.log("x: "+mousePos.x, "y: "+ mousePos.y );

        if ((mousePos.x <= 600 && mousePos.x >=383) && mousePos.y >= 160 && mousePos.y <= 223 && Interfaz.estado === "visible" ) {
            
                Interfaz.mod = "1vs1";
                Interfaz.estado = "invisible";
            // alert(mousePos.x + ',' + mousePos.y);

        }


        if ((mousePos.x <= 603 && mousePos.x >=383) && mousePos.y >= 250 && mousePos.y <= 318  && Interfaz.estado === "visible" ) {
            
            Interfaz.mod = "coop";
            Interfaz.estado = "invisible";
            //console.log(Guerrero.posicion_x);
            //console.log("clicked");
        // alert(mousePos.x + ',' + mousePos.y);

        }




        if ((mousePos.x <= 603 && mousePos.x >=383) && mousePos.y >=65 && mousePos.y <= 123  && Interfaz.estado === "visible" ) {
            
            Interfaz.mod = "single";
            Interfaz.estado = "invisible";
            mostrarBarras_hp = true;
            mostrarBarras_mp = true;
            mostrarBarras_exp = true;
            
         }



         //falta terminar
         if (Interfaz.estado == "invisible" && Arquero.muerto == true) {
            console.log("clicked respawn");
            Arquero.vida = Arquero.vida_maxima;
            Arquero.posicion_y = 300;
            Arquero.muerto = false;
            Escenarios.escenario_actual = "escenario_1";
            Arquero.posicion_x = 30;


            
         }





         
         if ((mousePos.x <= 987 && mousePos.x >=934) && mousePos.y >= 20 && mousePos.y <= 60 && musica_turned_off == false ) {

            musica_turned_off = true;
            backgroundMusic.pause();

         }

          
         else if ((mousePos.x <= 987 && mousePos.x >=934) && mousePos.y >= 20 && mousePos.y <= 60 && musica_turned_off == true ) {

            musica_turned_off = false;
            backgroundMusic.play();

         }



         console.log(mousePos.x + " " + mousePos.y);





        //  if ((mousePos.x <= Arquero.posicion_x + Arquero.w && mousePos.x >= Arquero.posicion_x) && mousePos.y >= Arquero.posicion_y - 20 && mousePos.y <=  Arquero.posicion_y - 60  && Interfaz.estado === "invisible"  && Arquero.muerto == true) {
            
        //     console.log("entro click");
         
        //     Arquero.muerto = false;
        //     Escenarios.escenario_actual = "escenario_1";
        //     Arquero.vida = 445;
            
        //  }



        
    }, false);
    
    //Get Mouse Position
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }





    let mod_estado = "pendiente";





    let cooldown_spiders = 60;
    let spidersSpawned = 0;
   function spawnearSpiders() {
    //EN PROGRESO roberto
    if (spidersSpawned < Waves.level.cantidad_spiders) {
    
        
            


 
        }

    

    }



    let spider = new Spider(100, 100);
    //spider.dropObject(context);
    let cooldown_animar_spider = 100;
    let spider_attack_cooldown = 0;





    let dropped = false;
  

    function tiempo() {
        //hace ejecutar 60 veces por segundo
        frame(tiempo);
        gravedad();
        moveLaser();

        
        

       //draw_healthbar(Arquero.posicion_x, Arquero.posicion_y + 10, Arquero.vida, Arquero.vida);
        
        actualizarMovimientosPesronajes();
        //  if () {}    

       



        cambiarMapa();



        if (Arquero.vida <= 0) {
            Arquero.muerto = true;
            Arquero.vida = 0;

        }






      

        // console.log("spider pos x" + spider.posicion_x);
        // console.log("arquero pos x + w" + Arquero.posicion_x + Arquero.w);
        // console.log("arquero pos x" +  Arquero.posicion_x);

        if (Escenarios.escenario_actual == "escenario_3") {         
            let distancia_arquero_spider_y = Math.abs(spider.posicion_y - Arquero.posicion_y);
            if (spider.posicion_x > Arquero.posicion_x &&
                spider.posicion_x < Arquero.posicion_x + Arquero.w &&
                spider_attack_cooldown == 0 && spider.muerto == false && 
                Arquero.muerto == false && distancia_arquero_spider_y < 80) {                            
                   Arquero.vida -= spider.damage;
                   spider_attack_cooldown = 300;
                   console.log("spider att" + spider_attack_cooldown);

                }

        }
       

        if (spider_attack_cooldown > 0 ) {

            spider_attack_cooldown -= 10;
            
        }

        if (spider_attack_cooldown < 0 ) {

            spider_attack_cooldown = 0;
            
        }




        if (cooldown_animar_spider > 0) {


            cooldown_animar_spider -= 5;

        }

        if (cooldown_animar_spider < 50) {

            spider.animarSpider(Interfaz.mod, "move_1");

            
            
        }

        if (cooldown_animar_spider > 50) {

            spider.animarSpider(Interfaz.mod, "move_2");       

        }
        if (cooldown_animar_spider <= 0) {
            cooldown_animar_spider = 100;
        }


       




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



        // if (Escenarios.escenario_actual === "escenario_1") {


            dibujarEscenario(context);

            if ( (Interfaz.mod == "coop" || Interfaz.mod == "single" )&&
                Interfaz.estado == "invisible" &&
                Escenarios.escenario_actual == "escenario_1"
                ) {


                    context.drawImage(imagen_cartel, Escenarios.escenario_1.misc.cartel_posX, Escenarios.escenario_1.misc.cartel_posY, imagen_cartel.naturalWidth, imagen_cartel.naturalHeight);
                   
            }
        // }

        context.drawImage(Nubes.nube_3.imagen, Nubes.nube_3.x, Nubes.nube_3.y);
    
        if (Escenarios.escenario_actual == "escenario_1" || Escenarios.escenario_actual == "escenario_3") {
            context.drawImage(Nubes.nube_2.imagen, Nubes.nube_2.x, Nubes.nube_2.y);
            context.drawImage(Nubes.nube_1.imagen, Nubes.nube_1.x, Nubes.nube_1.y);
        }
        
        // context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);

       

        //console.log(cooldown_habilidad_arco);
         

        if(Interfaz.mod == "coop"  || Interfaz.mod == "single") {
            if (Interfaz.mod == "coop" && mod_estado == "pendiente") {
                Guerrero.posicion_x = 150;
                direccion_guerrero = "derecha";
                mod_estado = "spawneado";    
            }



           // spawnearSpiders();
            

            

            if (Escenarios.escenario_actual == "escenario_3") {


               
                context.drawImage(Escenarios.escenario_3.plataforma.imagen, Escenarios.escenario_3.plataforma.posicion_x, Escenarios.escenario_3.plataforma.posicion_y);
                context.drawImage(Escenarios.escenario_3.escalera.imagen, Escenarios.escenario_3.escalera.posicion_x, Escenarios.escenario_3.escalera.posicion_y);

                if (Arquero.posicion_x >= Escenarios.escenario_3.plataforma.posicion_x && Arquero.posicion_x <= Escenarios.escenario_3.plataforma.posicion_x + Escenarios.escenario_3.plataforma.w 
                    && Arquero.posicion_y == Escenarios.escenario_3.plataforma.posicion_y - 50) {
                        gravedad_arquero_off = true;
                }else {
                    gravedad_arquero_off = false;
                }




                if (spider.muerto == false) {
                    spider.dibujarSpider(context);
                    spider.mostrarHp(context);
                }
              
                spider.moverSpider(spider.muerto);
               

            }


            // if (cooldown_animar_spider == 100) {

            //     spider.animarSpider();
            // }


            


           //fin roberto
        }





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




        if (cooldown_guerrero_stun  > 0) {


            cooldown_guerrero_stun = cooldown_guerrero_stun - 10;
            //console.log("cd stun: " +cooldown_guerrero_stun);


        }


       
        if (Arquero.estado == "stunneado" && efecto_stun > 0) {

            efecto_stun = efecto_stun - 10;
            



        }
        

        if (efecto_stun <= 0) {
            Arquero.estado = "funcional";
            //console.log(efecto_stun);
        }




        
        if(Interfaz.mod != "pendiente") {


        if (direccion == "izquierda") {



            if (Arquero.vida <= 0) {
                Arquero.muerto = true;
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
                Arquero.muerto = true;
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

//vida arquero



let porcentaje_arquero_hp = Arquero.vida * 100 / 222;
if (mostrarBarras_hp && porcentaje_arquero_hp > 0) {

    // hacer aca
    
    // let porcentaje_de_vida = 100;

    let inicio_width_barra_hp = 124;
    let max_width_barra_hp = 200;
    let width_barra_hp = max_width_barra_hp - inicio_width_barra_hp; // 200 - 124 = 76


  
    let porcentaje_barra_hp = width_barra_hp * 100 / 76;


    
    // va en spider cuando ataca

   let length_barra = 76 * porcentaje_barra_hp / 100;
    // console.log(length_barra);
    // console.log(porcentaje_arquero_hp);

    

    

    context.beginPath();
    context.rect(inicio_width_barra_hp, 27, porcentaje_arquero_hp , 8);
    // max_width_barra_hp
    context.lineWidth = "13";
    context.strokeStyle = "red";
    context.stroke();

    context.drawImage(Interfaz.imagen_barras_hp_mp.imagen, Interfaz.imagen_barras_hp_mp.posX, Interfaz.imagen_barras_hp_mp.posY);
}









if (mostrarBarras_mp) {

    

    

    context.beginPath();
    context.rect(116, 47, 210, 4);
    context.lineWidth = "13";
    context.strokeStyle = "blue";
    context.stroke();

    context.drawImage(Interfaz.imagen_barras_hp_mp.imagen, Interfaz.imagen_barras_hp_mp.posX, Interfaz.imagen_barras_hp_mp.posY);
}

if (mostrarBarras_exp) {

    let barra_exp_limite = 248;
    let barra_exp_width = Arquero.exp;

    if (Arquero.exp > 0) {
    context.beginPath();
    context.rect(76, 70, barra_exp_width, 4);
    context.lineWidth = "13";
    context.strokeStyle = "orange";
    context.stroke();
    }
    //inicio 76
    //maximo 248
    //Arquero.exp 
    context.drawImage(Interfaz.imagen_barra_exp.imagen, Interfaz.imagen_barra_exp.posX, Interfaz.imagen_barra_exp.posY);
}



context.fillText(Math.round(Arquero.vida) + "/" + Arquero.vida_maxima, Interfaz.imagen_barras_hp_mp.posX+ 175,Interfaz.imagen_barras_hp_mp.posY +34);
context.fillText(Arquero.nivel,47,84);
//context.fillText("Lvl " + Arquero.nivel, Arquero.posicion_x, Arquero.posicion_y - 40);









switch (Arquero.nivel) {
    case 1:context.fillText("Exp " + Arquero.exp + "/" + Levels.level_1_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 2: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_2_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 3: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_3_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 4: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_4_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 5: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_5_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 6: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_6_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 7: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_7_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;

    case 8: context.fillText("Exp: " + Arquero.exp + "/" + Levels.level_8_max_exp, Arquero.posicion_x, Arquero.posicion_y - 20);
    break;            
}







        respawnArquero(context);






        //guerrero












        if (direccion_guerrero == "izquierda" && Interfaz.mod != "single") {

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


        if (direccion_guerrero == "derecha" && Interfaz.mod != "single") {


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



        



        context.save();
        if (Interfaz.mod != "single") {

            switch (Guerrero.nivel) {
                case 1: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_1_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);          
                break;
                case 2: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_2_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 3: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_3_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 4: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_4_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 5: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_5_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 6: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_6_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 7: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_7_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;
                case 8: context.fillText("Exp: " + Guerrero.exp + "/" + Levels.level_8_max_exp, Guerrero.posicion_x, Guerrero.posicion_y - 20);
                break;            
            }
          

            context.fillText("Guerrero Hp: " + Guerrero.vida, Guerrero.posicion_x, Guerrero.posicion_y - 30);
            context.fillText("Lvl " + Guerrero.nivel, Guerrero.posicion_x, Guerrero.posicion_y - 40);
    

        if (direccion_guerrero == "izquierda") {
            context.translate(Guerrero.posicion_x + (Guerrero.w - 20), Guerrero.posicion_y - 3);
            context.scale(-1, 1);
        } else {
            context.translate(Guerrero.posicion_x + 9, Guerrero.posicion_y + 3);
        }
        //context.drawImage(hacha, Guerrero.posicion_x + 3, Guerrero.posicion_y + 3, hacha.naturalWidth, hacha.naturalHeight);
        

       
       
            context.drawImage(hacha, 0, 0);
        }
      
        context.restore();


        //vida guerrero

       
       
       









        

           
        


        }


       
        //context.drawImage(arco, Arquero.posicion_x + 3, Arquero.posicion_y +3, arco.naturalWidth, arco.naturalHeight);



        //se dibujan las nubes --------------------------------------
      

        Nubes.nube_1.x -= 0.23;

        











        
        Nubes.nube_2.x -= 0.2;

      
        Nubes.nube_3.x -= 0.24;


        if (Nubes.nube_1.x <= -140) {
            Nubes.nube_1.x = 1000;
        }
        if (Nubes.nube_2.x <= -140) {

            Nubes.nube_2.x = 1000;

        }
        if (Nubes.nube_3.x <= -140) {

            Nubes.nube_3.x = 1000;

        }
        //console.log(Nubes.nube_1.x);










        // fin se dibujan las nubes --------------------------------------
 
      
        if (Interfaz.estado == "visible") {           


        context.drawImage(Interfaz.contenedor_interfaz.imagen, Interfaz.contenedor_interfaz.posX, Interfaz.contenedor_interfaz.posY);
        context.drawImage(Interfaz.boton_single.imagen, Interfaz.boton_single.posX, Interfaz.boton_single.posY);
        context.drawImage(Interfaz.boton_1vs1.imagen, Interfaz.boton_1vs1.posX ,Interfaz.boton_1vs1.posY);
        context.drawImage(Interfaz.boton_coop.imagen, Interfaz.boton_coop.posX, Interfaz.boton_coop.posY);
         //context.drawImage(Interfaz.imagen_single, 370, 280);
        }


        



            //SE COMENTO MOMENTANEAMENTE HASTA AGREGAR FUNCIONALIDAD
            //context.drawImage(Interfaz.imagen_reset, 870,20, Interfaz.imagen_reset.naturalWidth, Interfaz.imagen_reset.naturalHeight);





        //console.log(Interfaz.imagen_reset);

        //context.font("60px");



       



        // console.log("posicion_jugador_x : " + posicion_jugador_x);
        // console.log("posicion_jugador_y : " + posicion_jugador_y);
        // console.log(tiempo);

       // context.drawImage(Mago.imagen_derecha, Mago.posicion_x, Mago.posicion_y, Mago.imagen_derecha.naturalWidth, Mago.imagen_derecha.naturalHeight);



       
        

        if (spider.muerto == true) {

           
            if (dropped == false){
                spider.dropObject(context);
                dropped = true;
            }
            
            if (spider.spawn_time == 0){
                spider.respawnSpider();
                dropped = false;
                
            }
            


        }

        if (spider.spawn_time  > 0) {
            spider.spawn_time -= 1;

        }
        else if (spider.spawn_time == 0) {
            
            spider.spawn_time = 700;
        }




        // if (Escenarios.escenario_3.dropped_items.length > 0) {           
        //     console.log(Escenarios.escenario_3.dropped_items);
        //     // for (let i = 0 ; i < Escenarios.escenario_3.dropped_items.length; i ++) {
                
             
        //     //corregir luego
        //         context.drawImage(Equipamiento.arquero.armas.golden_bow.imagen, spider.posicion_x,spider.posicion_y);
        //     // }
        //     }
            

       

       



        checkIfLevelUp();


        


        drawLaser();

        

        if (Interfaz.mod == "single") {

            recuperarVidaArquero ()
        }


        if (velocidad_guerrero > 0) {
            velocidad_guerrero = velocidad_guerrero - 0.4;
        }


        if (velocidad > 0) {
            velocidad = velocidad - 0.4;
        }




        if (Arquero.interfaz.inventario_abierto == true) {
            context.drawImage(imagen_inventario,700, 100);
            context.fillText("Gold: "+ Arquero.gold,720,130);
            
        }

        if (Arquero.interfaz.estadisticas_abierto == true) {

            context.drawImage(Interfaz.imagen_equipamiento_stats.imagen,Interfaz.imagen_equipamiento_stats.posX, Interfaz.imagen_equipamiento_stats.posY);
            
            context.fillText(Stats.arquero.fuerza,490,323);
        }





        if (musica_turned_off == false) {

            context.drawImage(Interfaz.musica.imagen_boton_on.imagen, Interfaz.musica.imagen_boton_on.posX, Interfaz.musica.imagen_boton_on.posY );
        }else if (musica_turned_off){
            context.drawImage(Interfaz.musica.imagen_boton_off.imagen, Interfaz.musica.imagen_boton_off.posX, Interfaz.musica.imagen_boton_off.posY );
        }
        

       


      


        //console.log(velocidad);
    }



   
    tiempo();
   
}
