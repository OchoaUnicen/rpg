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


    //Personaje("Carlitos", 'arquero', getImagen);


    //console.log(Personaje);


//------------------------------------------
//VELOCIDAD

        let velocidad = 0;








    //---------------------------------



    let posicion_jugador_x = 20;
    let posicion_jugador_y = 320;
    let arquero = new Image();
    arquero.src = "./img/arquero.png";
    let fondo = new Image();
    fondo.src = "./img/fondo.png";






    {// ********************************************** EN PROGRESO **************************************************

        // Usuario_Arquero = new Personaje ("Galadar", "Arquero", URL(/img/arquero.png));
        //  let instancia_arquero = new personaje("Archer", "Clase", arquero);

        


        var personaje = {
            "nombre": "Galandar",
            "clase": "Arquero",
            "img": arquero
            
            
            // function (){
            //     let imagen_arquero = new Image();
            //     imagen_arquero.src = "./img/arquero.png";
            //     return imagen_arquero;}
            

            ,
            "posicion_x": posicion_jugador_x,
            "posicion_y": posicion_jugador_y

        
        
        
        }
        console.log(personaje.nombre);
        console.log(personaje.clase);
        console.log(personaje.posicion_x);
        console.log(personaje.posicion_y);
        console.log(personaje);

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


    function crearMatriz(w, h) {
        const matriz = [];
        while (h--) {
            matriz.push(new Array(w).fill(0));
            
        }
        return matriz;
    }


    document.addEventListener('keydown', event => {



        if (event.keyCode === 65) {
            //letra A - izquierda

           // velocidad = velocidad + 2;
            acelerar(event);
            // posicion_jugador_x-=velocidad;
        }
        else if (event.keyCode === 68) {

            //letra D - derecha

           // velocidad = velocidad + 2;
           acelerar(event);

           // posicion_jugador_x+=velocidad;
        }
        else if (event.keyCode === 87) {

            //letra W - Arriba

            saltar();
            
       

       // let formula_magica =3* GRAVEDAD / (TIEMPO_AL_CUADRADO) ;
       // posicion_jugador_y -=formula_magica;
       // console.log("keydown W ");
       //console.log("formula magica: " + formula_magica);
       // console.log("posicion_jugador_y: " + posicion_jugador_y);
        }
        else if (event.keyCode === 83) {

            //letra S - Abajo
            posicion_jugador_y+=30;
        }
    

       // console.log(event);
    });


    function acelerar(event){
       
        if (event.keyCode==65) {
            //letra A - izquierda
            velocidad = velocidad+2;
            
            posicion_jugador_x-=velocidad;
        }

        if (event.keyCode==68) {
             //letra D - derecha
             velocidad = velocidad+2;
             posicion_jugador_x+=velocidad;


        }



       


    }






    function saltar() {


        posicion_jugador_y-=50;
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
       


        if(posicion_jugador_y < 370) {
        posicion_jugador_y += 2;
        
        
        
        //3* GRAVEDAD * (TIEMPO_AL_CUADRADO);

        contador_tiempo ++;
        console.log(contador_tiempo);   

        }
        

    }
//###############################FIN##GRAVEDAD#########################

    function tiempo() {
        //hace ejecutar 60 veces por segundo
        frame(tiempo);    
         gravedad(); 
        
            //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
            context.clearRect(0,0, canvas.width, canvas.heigh);
            context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);
            context.drawImage(arquero, posicion_jugador_x, posicion_jugador_y, arquero.naturalWidth, arquero.naturalHeight);
            // console.log("posicion_jugador_x : " + posicion_jugador_x);
            // console.log("posicion_jugador_y : " + posicion_jugador_y);
            // console.log(tiempo);

        




        if (velocidad>0) {
            velocidad = velocidad-0.4;
        }
        

        //console.log(velocidad);
    }




    tiempo();

}
