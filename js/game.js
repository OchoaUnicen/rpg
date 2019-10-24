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
    const GRAVEDAD = 3.8;
    let contador_tiempo = 1;
       
    const TIEMPO_AL_CUADRADO = contador_tiempo * contador_tiempo;


    

//------------------------------------------
//VELOCIDAD

        let velocidad = 0;
        let velocidad_guerrero = 0;








    //---------------------------------



    // let posicion_jugador_x = 20;
    // let posicion_jugador_y = 320;


    // let arqueroIzquierda = new Image();
    // arqueroIzquierda.src = "./img/arqueroiz.png";

    // let arquero = new Image();
    // arquero.src = "./img/arquero.png";
    let fondo = new Image();
    fondo.src = "./img/fondo.png";






    {// ********************************************** EN PROGRESO **************************************************

      


        // var personaje = {
        //     "nombre": "Galandar",
        //     "clase": "Arquero",
        //     "img": arquero      
            
       
        //     ,
        //     "posicion_x": posicion_jugador_x,
        //     "posicion_y": posicion_jugador_y

        
        
        
        // }
        // console.log(personaje.nombre);
        // console.log(personaje.clase);
        // console.log(personaje.posicion_x);
        // console.log(personaje.posicion_y);
        // console.log(personaje);

        // let pos_x = posicion_jugador_x;
        // let pos_y = posicion_jugador_y;
        // let personaje_imagen = "\".img/arquero.png\"";
        // let personaje_objeto = {

        //     posicion_x: pos_x,
        //     posicion_y: pos_y,
        //     img:URL          



        // }



        //console.log(personaje.posicion);
        // let posicion_jugador_x = 20;
        // let posicion_jugador_y = 320;
        // let arquero = new Image();
        // arquero.src = "./img/arquero.png";




        
        // let instancia_arquero = new personaje("Archer", "Clase", arquero);
        
        
        
        
        
        // ********************************************** FIN EN PROGRESO **************************************************
    }







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

    document.addEventListener('keydown', event => {





        

        if (event.keyCode === 65) {
            //letra A - izquierda

           // velocidad = velocidad + 2;
            acelerar(event);
            direccion = "izquierda";
            // posicion_jugador_x-=velocidad;
        }
        else if (event.keyCode === 68) {

            //letra D - derecha

           // velocidad = velocidad + 2;
           acelerar(event);
            direccion = "derecha";
           // posicion_jugador_x+=velocidad;
        }
        else if (event.keyCode === 87) {

            //letra W - Arriba

            saltar(event);
            
       

       // let formula_magica =3* GRAVEDAD / (TIEMPO_AL_CUADRADO) ;
       // posicion_jugador_y -=formula_magica;
       // console.log("keydown W ");
       //console.log("formula magica: " + formula_magica);
       // console.log("posicion_jugador_y: " + posicion_jugador_y);
        }

        
        else if (event.keyCode === 83) {

            //letra S - Abajo
            Arquero.posicion_y+=30;
        }
        else if (event.keyCode == 32 && lasers.length <= laserTotal) // space
        {
            lasers.push([Arquero.posicion_x + 40, Arquero.posicion_y + 50, 20, 4]);
        }

        // ************************* PLAYER 2 GUERRERO ***********

        else if (event.keyCode == 37) {


            acelerar(event);
            direccion_guerrero = "izquierda";
            //Flecha izquierda <-




        }

        else if (event.keyCode == 39) {

            //Flecha derecha ->
            direccion_guerrero = "derecha";
            acelerar(event);

        } 

        else if (event.keyCode == 40) {

            //Flecha abajo v
            acelerar(event);

        } 
        else if (event.keyCode == 38) {

            //Flecha arriba
            saltar(event);

        } 
    

       // console.log(event);
    });

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

       
        if (event.keyCode==65) {
            //letra A - izquierda
           
           
            if (velocidad < limite_aceleracion) {

                velocidad = velocidad+2;
            }
           
           
            
            Arquero.posicion_x-=velocidad;
        }

        if (event.keyCode==68) {
             //letra D - derecha

             if (velocidad < limite_aceleracion) {

             velocidad = velocidad+2;

             }


             Arquero.posicion_x+=velocidad;


        }



       


    }






    function saltar(event) {

        console.log("anda");
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

    // document.addEventListener('keyup', event => {




    // });




    //###############################GRAVEDAD#########################

    function gravedad() {

       // console.log(posicion_jugador_y);
       


        if(Arquero.posicion_y < 370) {
        Arquero.posicion_y += 2;
        
        
        
        //3* GRAVEDAD * (TIEMPO_AL_CUADRADO);

        contador_tiempo ++;
        console.log("tiempo en caer jugador 1 :"+ contador_tiempo);   

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






    function moveLaser() {

        if (direccion== "izquierda") {


        }
        if (direccion== "derecha") {

            
        }


        for (var i = 0; i < lasers.length; i++) {
          if (lasers[i][0] < canvas.width) {
            lasers[i][0] += 10;
            console.log(lasers[i][0]);
          } else if (lasers[i][0] > canvas.width-1) {
            lasers.splice(i, 1);
          }
        }





      }
      
  
//



 function arrowCollision() {






 }






    function tiempo() {
        //hace ejecutar 60 veces por segundo
        frame(tiempo);    
         gravedad(); 
         moveLaser();
        


         //arrowCollision();












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


                context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
            
            } 

            
            if (direccion_guerrero == "derecha") {


                context.drawImage(Guerrero.imagen_derecha, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_derecha.naturalWidth, Guerrero.imagen_derecha.naturalHeight);
            
            } 




            
            
            
            //context.font("60px");
            context.fillText("Guerrero Hp: "+ Guerrero.vida, 800, 50);
            
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


            if (direccion == "izquierda") {


                Arquero.posicion_x-=velocidad;

            }


            if (direccion == "derecha") {

                Arquero.posicion_x+=velocidad;
            }
           

            // if (event.keyCode==65) {
            //     //letra A - izquierda
                
                
            //     posicion_jugador_x-=velocidad;
            // }
    
            // if (event.keyCode==68) {
            //      //letra D - derecha
                 
            //      
    
    
            // }




        }
        

        //console.log(velocidad);
    }




    tiempo();

}
