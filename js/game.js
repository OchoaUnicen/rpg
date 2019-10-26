document.addEventListener('DOMContentLoaded', cargar_game_js);


    function cargar_game_js () {

        "use strict";
    //compatibilidad con multiples navegadores
    let frame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;



    let canvas = document.getElementById('lienzo');
    let context = canvas.getContext('2d');
    
      //  const GRAVEDAD = 20;
    // const GRAVEDAD = 3.8;
    let contador_tiempo = 1;
       
    const TIEMPO_AL_CUADRADO = contador_tiempo * contador_tiempo;

        //********************* */
    //canvas.appendChild(sonido_disparo_arco);
    //**************** */

//------------------------------------------
//VELOCIDAD

        let velocidad = 0;
        let velocidad_guerrero = 0;








    //---------------------------------





    

    cargarTeclas();

   







    // let posicion_jugador_x = 20;
    // let posicion_jugador_y = 320;


    // let arqueroIzquierda = new Image();
    // arqueroIzquierda.src = "./img/arqueroiz.png";

    // let arquero = new Image();
    // arquero.src = "./img/arquero.png";
    let fondo = new Image();
    fondo.src = "./img/fondo.png";




    const mapa = crearMatriz(100, 50);

    var laserTotal = 2, lasers = [];



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


    document.addEventListener('keydown', (e) => { Teclas[e.keyCode] = true
    
        //console.log("tecla apretada");
        //console.log(Teclas[e.keyCode]);
    });

    // document.addEventListener('keydown', event => {










        

    //     if (event.keyCode === 65) {
    //         //letra A - izquierda

    //        // velocidad = velocidad + 2;






    //        Teclas[event.keyCode] = true;

    //         // if (Teclas[event.keyCode] = true) {

    //         //     acelerar(event);
    //         // }


    //        acelerar(event);





    //         direccion = "izquierda";
    //         // posicion_jugador_x-=velocidad;
    //     }
    //     else if (event.keyCode === 68) {

    //         //letra D - derecha


    //         Teclas[event.keyCode] = true;


    //         // if (Teclas[event.keyCode] = true) {

    //         //     acelerar(event);
    //         // }


    //         acelerar(event);




    //        // velocidad = velocidad + 2;
           




    //         direccion = "derecha";
    //        // posicion_jugador_x+=velocidad;
    //     }
    //     else if (event.keyCode === 87) {

    //         //letra W - Arriba



            


    //         saltar(event);
            
       

    //    // let formula_magica =3* GRAVEDAD / (TIEMPO_AL_CUADRADO) ;
    //    // posicion_jugador_y -=formula_magica;
    //    // console.log("keydown W ");
    //    //console.log("formula magica: " + formula_magica);
    //    // console.log("posicion_jugador_y: " + posicion_jugador_y);
    //     }

        
    //     else if (event.keyCode === 83) {

    //         //letra S - Abajo
    //         Arquero.posicion_y+=30;
    //     }
    //     else if (event.keyCode == 32 && lasers.length <= laserTotal) // space
    //     {
    //         // console.log(sonido_disparo_arco);
    //         arco.src = arco_disparando.src;



    //         sonido_disparo_arco.play();
             


    //         lasers.push([Arquero.posicion_x + 40, Arquero.posicion_y + 50, 20, 4]);
    //         console.log(Arquero.posicion_y);
    //     }

    //     // ************************* PLAYER 2 GUERRERO ***********

    //     else if (event.keyCode == 37) {


    //         acelerar(event);
    //         direccion_guerrero = "izquierda";
    //         //Flecha izquierda <-




    //     }

    //     else if (event.keyCode == 39) {

    //         //Flecha derecha ->
    //         direccion_guerrero = "derecha";
    //         acelerar(event);

    //     } 

    //     else if (event.keyCode == 40) {

    //         //Flecha abajo v
    //         acelerar(event);

    //     } 
    //     else if (event.keyCode == 38) {

    //         //Flecha arriba
    //         saltar(event);

    //     } 
    

    //    // console.log(event);
    // });



      //###############FIN#######EN ACTUALIZACION SISTEMA MOVIMIENTO ##############

    let limite_aceleracion = 5;

    
    function acelerar(event){


        




        if (event.keyCode==37) {
            //flecha <-
           
           
            if (velocidad_guerrero < limite_aceleracion) {

                velocidad_guerrero = velocidad_guerrero+2;
            }
           
           
            
            Guerrero.posicion_x-=velocidad_guerrero;
        }
        if (event.keyCode==39) {
            //Flecha derecha ->
           
           
            if (velocidad_guerrero < limite_aceleracion) {

                velocidad_guerrero = velocidad_guerrero+2;
            }
           
           
            
            Guerrero.posicion_x+=velocidad_guerrero;
            //console.log("velocidad guerrero: "+velocidad_guerrero);
        }

       


        // if (Teclas[event.keyCode]==true) {

        //     if (velocidad < limite_aceleracion) {

        //         velocidad = velocidad+2;
        //         }    
           
            
        //     Arquero.posicion_x-=velocidad;

        // }



        // if (event.keyCode==65) {     //letra A - izquierda
        //         if (velocidad < limite_aceleracion) {

        //         velocidad = velocidad+2;
        //         }    
           
            
        //     Arquero.posicion_x-=velocidad;
        // }









        // if (event.keyCode==68) {
        //      //letra D - derecha

        //      if (velocidad < limite_aceleracion) {

        //      velocidad = velocidad+2;

        //      }


        //      Arquero.posicion_x+=velocidad;


        // }



       


    }






    function saltar(event) {

       // console.log("anda");
        if (event.keyCode==38) {

            Guerrero.posicion_y-=50;
           
            if (velocidad_guerrero < limite_aceleracion) {
    
    
                velocidad_guerrero = velocidad_guerrero +8;
            }




        }



        if (event.keyCode==87) {

        Arquero.posicion_y-=50;

        if (velocidad < limite_aceleracion) {


            velocidad = velocidad +8;
            }
        }
        
    }

    // document.addEventListener('keypress', event => {

    //     if (event.keyCode === 87) {

    //         //letra W - Arriba
    //     posicion_jugador_y-=50;


    //         console.log("apreta W");

    //     }



    // });


 //#########################EN ACTUALIZACION SISTEMA MOVIMIENTO ##############





 document.addEventListener('keyup', (e) => { Teclas[e.keyCode] = false


  //  console.log(Teclas[e.keyCode]);

});






    document.addEventListener('keyup', event => {

        if(event.keyCode==74) {

            //j


            arco.src = "./img/arqueroarco1.png";

        }

    });

    //     if (event.keyCode==68) {


    //         Teclas[event.keyCode] = false;
    //     }

        

    //     if (event.keyCode === 65) { 


    //         Teclas[event.keyCode] = false;
    //     }

    // });

 //###############FIN#######EN ACTUALIZACION SISTEMA MOVIMIENTO ##############


    //###############################GRAVEDAD#########################

    function gravedad() {

       // console.log(posicion_jugador_y);
       


        if(Arquero.posicion_y < 370) {
        Arquero.posicion_y += 2;
        
        
        
        //3* GRAVEDAD * (TIEMPO_AL_CUADRADO);

        contador_tiempo ++;
        //console.log("tiempo en caer jugador 1 :"+ contador_tiempo);   

        }

        if (Guerrero.posicion_y < 370) {

            Guerrero.posicion_y += 2;

        }
        

    }
    
//###############################FIN##GRAVEDAD#########################
//##



    function drawLaser() {
        if (lasers.length)
        for (var i = 0; i < lasers.length; i++) {
            context.fillStyle = '#f00';
            context.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3])
        }
    }


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }



    function moveLaser() {

        if (direccion== "izquierda") {


           


        }


        if (direccion== "derecha") {

           
           
            
        }

        for (var i = 0; i < lasers.length; i++) {
            if (lasers[i][0] < canvas.width) {
              lasers[i][0] += 10;
              //console.log(lasers[i][0]);
  
  
              if (Guerrero.vida > 0 && (lasers[i][0] >= Guerrero.posicion_x &&
                  lasers[i][0] <= (Guerrero.posicion_x + Guerrero.w)) && Arquero.posicion_y == Guerrero.posicion_y) {
                       //*****************EN PROGRESO********************** */
                    //verificar la altura del arquero respecto al guerrero para delimitar hit












 
                //   console.log("contacto");
                  
                //   console.log("lasers pos pos: "+ lasers[i][0]);
                  
  
                //   console.log("posicion X de guerrero: "+Guerrero.posicion_x);
                //   console.log("posicion Y de guerrero: "+Guerrero.posicion_y);
                //   console.log("posicion X de arquero: "+Arquero.posicion_x);
                //   console.log("posicion Y de arquero: "+Arquero.posicion_y);



                  
                  //Guerrero.vida -= Math.random() * (max - min) + min;


                  let damage = getRandomInt(69);
                  Guerrero.vida -= damage; 
                  
                  
                  //getRandomInt(69 /* <- lindo numero */);
  

                  sondio_recibir_flechazo_armadura.play();


                  //createText(damage.toString(), "#990000", Guerrero);

                    
                //   context.font = "30px";
                  // context.fillText(damage, Guerrero.posicion_x, Guerrero.posicion_y-40);

                
                  
                    // console.log("llega");
                     console.log("damage: "+ damage);



  
                  if (Guerrero.vida < 0)
                      Guerrero.vida = 0;
  
                  // Borramos el laser.
                  lasers.splice(i, 1);
              }
  
             // console.log("i: "+i);
  
  
  
  
            } else if (lasers[i][0] > canvas.width-1) {
              lasers.splice(i, 1);
            }
          }

        

      }
      
  function createText(text_string, color_string, target) {
  var text_miss = new createjs.Text(text_string, "48px VT323", color_string);

  
  //delay before the text appears
  setTimeout(function() {
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
          
            .to({scaleX:1.2, scaleY:1.2}, 400)
            .to({alpha:0, visible:false}, 800)
            .call(handleComplete);
          function handleComplete() {
              textArray.splice(i, 1); //removes the text from the array
          }
      }
    }
  }
//



 function arrowCollision() {






 }




 function draw_healthbar(x, y, personaje_hp, width, thickness){
    context.beginPath();
    context.rect(x-width/2, y, width*(personaje_hp/100), thickness);




    if(personaje_hp > 63){
        context.fillStyle="green"
    }else if(personaje_hp > 37){
        context.fillStyle="gold"
    }else if(personaje_hp > 13){
        context.fillStyle="orange";
    }else{
        context.fillStyle="red";
    }
    context.closePath();
    context.fill();
  }
 
  function actualizarMovimientosPesronajes() {


    

   
    if (Teclas[tecla.letra_j]==true&& lasers.length <= laserTotal){
        //letra j


 
        if (disparo_cooldown == 0) {

            arco.src = arco_disparando.src;

            

            sonido_disparo_arco.play();
             


            lasers.push([Arquero.posicion_x + 40, Arquero.posicion_y + 50, 20, 4]);

            disparo_cooldown = 300;
        }
    
   
    }


    
    
    if  (Teclas[tecla.letra_d]== true){
         // Derecha

         direccion = "derecha";
        console.log("derecha true");
        if (velocidad < limite_aceleracion) {

            velocidad = velocidad+1;

            }


            Arquero.posicion_x+=velocidad;        

       }


        if  (Teclas[tecla.letra_a]== true){
            //Izquierda

            direccion = "izquierda";
            console.log(direccion);

             if (velocidad < limite_aceleracion) {

                    velocidad = velocidad+1;

                 }


            Arquero.posicion_x-=velocidad;        

       }


       if (Teclas[tecla.letra_w]== true) {
           //Tecla W - Saltar
           if (Arquero.posicion_y == 370) {

          

            Arquero.posicion_y-=50;
            if(direccion == "derecha"){
                Arquero.posicion_x +=15
            }

            if (direccion == "izquierda") {
                Arquero.posicion_x -=15;
            }
          
            
        }
        


       }

       if (Teclas[tecla.flecha_arriba]== true) {
        //Tecla Flecha arriba - Saltar guerrero
        if (Guerrero.posicion_y == 370) {

       

         Guerrero.posicion_y-=50;


         if(direccion_guerrero == "derecha"){
            Guerrero.posicion_x +=15
         }

         if (direccion_guerrero == "izquierda") {
            Guerrero.posicion_x -=15;
         }
       
         
     }    


    }

    if  (Teclas[tecla.flecha_izq]== true){
        //Flecha Izquierda

        direccion_guerrero = "izquierda";
        console.log("direccion guerrero: "+ direccion_guerrero);

         if (velocidad < limite_aceleracion) {

                velocidad = velocidad+1;

             }


        Guerrero.posicion_x-=velocidad;        

   }

   if  (Teclas[tecla.flecha_der]== true){
    //Flecha derecha

    direccion_guerrero = "derecha";
    console.log("direccion guerrero: "+ direccion_guerrero);

     if (velocidad < limite_aceleracion) {

            velocidad = velocidad+1;

         }


    Guerrero.posicion_x+=velocidad;        

}


    if (Teclas[tecla.numpad1]) {

        atacarHacha();

    }

}



let disparo_cooldown = 0;

    function tiempo() {
        //hace ejecutar 60 veces por segundo
        frame(tiempo);    
         gravedad(); 
         moveLaser();
         draw_healthbar(Guerrero.posicion_x, Guerrero.posicion_y+10, Guerrero.vida, Guerrero.vida);

         actualizarMovimientosPesronajes()
        //  if () {}


        


        if (disparo_cooldown > 0 ) {
            disparo_cooldown = disparo_cooldown-10;
        
            console.log(disparo_cooldown);
        }

        

        //console.log(Arquero.posicion_y);
         //arrowCollision();






         //***********--*-*--*-**--*-***--*--**--*-**-*-*-*--* *-***-**--*-*-*----**--*-*/

        //  console.log("derecha estado: "+ Teclas[68]);
        //  console.log("izquierda estado: "+Teclas[65]);


        





            //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
            context.clearRect(0,0, canvas.width, canvas.heigh);




            context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);

            

            if (direccion == "izquierda") {

                context.drawImage(Arquero.imagen_izquierda, Arquero.posicion_x, Arquero.posicion_y, Arquero.imagen_izquierda.naturalWidth, Arquero.imagen_izquierda.naturalHeight);
                

            }

            if (direccion == "derecha") {

                context.drawImage(Arquero.imagen_derecha, Arquero.posicion_x, Arquero.posicion_y, Arquero.imagen_derecha.naturalWidth, Arquero.imagen_derecha.naturalHeight);

            }



            if (direccion_guerrero == "izquierda") {

                if (Guerrero.vida <= 0)
                {
                    context.save();
                    
                    context.translate(Guerrero.posicion_x, Guerrero.posicion_y);
                    context.rotate(60 * Math.PI / 180);
                    context.drawImage(Guerrero.imagen_izquierda,Guerrero.imagen_izquierda.width/2,-Guerrero.imagen_izquierda.width/2);

                    //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                    // Reset transformation matrix to the identity matrix
                    context.restore();

                }
                else
                {
                    context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
                }
            
            } 

            
            if (direccion_guerrero == "derecha") {


                context.drawImage(Guerrero.imagen_derecha, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_derecha.naturalWidth, Guerrero.imagen_derecha.naturalHeight);
            
            } 




            context.drawImage(arco, Arquero.posicion_x + 3, Arquero.posicion_y +3, arco.naturalWidth, arco.naturalHeight);
            
            
            //context.font("60px");
            context.fillText("Guerrero Hp: "+ Guerrero.vida, Guerrero.posicion_x, Guerrero.posicion_y-30);
            

            context.fillText("Arquero Hp: "+ Arquero.vida, Arquero.posicion_x, Arquero.posicion_y-30);
            // console.log("posicion_jugador_x : " + posicion_jugador_x);
            // console.log("posicion_jugador_y : " + posicion_jugador_y);
            // console.log(tiempo);
            
            drawLaser();




            if (velocidad_guerrero > 0) {

                velocidad_guerrero = velocidad_guerrero -0.4;


                if (direccion_guerrero == "izquierda") {

                    Guerrero.posicion_x-=velocidad_guerrero;
                }


                if (direccion_guerrero == "derecha") {

                    Guerrero.posicion_x += velocidad_guerrero;

                }



            }



        if (velocidad>0) {
            velocidad = velocidad-0.4;

          




        }
        

        //console.log(velocidad);
    }




    tiempo();

}
