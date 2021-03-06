
// let escenario_1 = new Image();
// escenario_1.src = "./img/escenarios/escenario_1.png";

// let escenario_2 = new Image();
// escenario_2.src = "./img/escenarios/escenario_2.png";



let imagen_nube_1 = new Image();
imagen_nube_1.src = "./img/nube_1.png"

let imagen_nube_2 = new Image();
imagen_nube_2.src = "./img/nube_2.png"

let imagen_nube_3 = new Image();
imagen_nube_3.src = "./img/nube_3.png"


let imagen_cartel = new Image();
imagen_cartel.src = "./img/fondo/cartel_coop.png";

let imagen_escalera = new Image();
imagen_escalera.src = "./img/mapas/colisionables/imagen_escalera.png";

let imagen_plataforma = new Image();
imagen_plataforma.src = "./img/mapas/colisionables/imagen_plataforma_pasto.png";


let Nubes = {
    "nube_1" : {
        imagen: imagen_nube_1,
        x: 200,
        y: 200} ,
    "nube_2": {
        imagen: imagen_nube_2,
        x:  800,
        y: 100} ,
    "nube_3":{
        imagen: imagen_nube_3,
        x: 600,
        y: 18} ,


}

let fondo = new Image();
fondo.src = "./img/fondo.png";

let imagen_escenario_shop = new Image();
imagen_escenario_shop.src = "./img/fondo/imagen_escenario_shop.png";
//console.log(imagen_escenario_shop);

let fondo_largo = new Image();
fondo_largo.src = "./img/fondo_largo.png";




let Escenarios = {
    "escenario_actual": "escenario_1",
    "escenario_actual_tipo" : "corto" ,
    "escenario_1": escenario_1 =    {
        "nombre": "Lobby",
        "tipo": "corto" ,
        //corto - largo - largo_alto - alto
        "imagen": fondo,  
        "misc": {
            "imagen_cartel": imagen_cartel,
            "cartel_posX": 740,
            "cartel_posY": 292
        },
        "dropped_items": [],      
    },
    "escenario_2": escenario_2 =    {
        "nombre": "Shop",
        "tipo": "corto" ,
        "dropped_items": [],
        "imagen": imagen_escenario_shop,        
    },

    "escenario_3": escenario_3 =    {
        "nombre": "Bosque Spider",
        "tipo": "corto" ,
        "imagen": fondo,
        "dropped_items": [],
        "escalera" : {
            imagen: imagen_escalera,
            posicion_x: 200,
            posicion_y: 100,
            w: 100,
            h: 379

        },
        "plataforma": {
            imagen: imagen_plataforma,
            posicion_x: 200,
            posicion_y: 60,
            w: 700,
            h: 100

        }
    },


    "escenario_4": escenario_4 = {
        "nombre": "fondo_largo",
        "tipo": "largo" ,
        "dropped_items": [],
        "imagen": fondo_largo,
        
        
        fondo_x: 0,
        fondo_y: 0,
        fondo_w: 5000,
        fondo_h: 500

       
    }



}



// function droppedObjects(context, droppedObject , posX, posY) {
    function droppedObjects(context) {
        //recorrer el array de objetos droppeados si pos 0 no es nulla
        //console.log("ejecutandose dropobjects");
        if (Escenarios.escenario_actual == "escenario_3" ){
            //&& Escenarios.escenario_3.dropped_items[0]!= null

            for (let i = 0 ; i < Escenarios.escenario_3.dropped_items.length; i ++){
                // 3 corresponde a la cantida de propiedades de cada elemento
                var resto = i % 3; 
                if (Escenarios.escenario_3.dropped_items[i]!= null && resto == 0  ) {
                    // || i == 0


                    // if ( resto == 0 ){
                    // alert("multiplo");
                    // }
                    context.drawImage(Escenarios.escenario_3.dropped_items[i].imagen,Escenarios.escenario_3.dropped_items[i+1] ,Escenarios.escenario_3.dropped_items[i+2]); 

                }
                
            }

        }


        //si se encuentra un objeto no null  => dibujarlo en su respectiva pos xy

        

        //context.drawImage(droppedObject.imagen,posX ,posY); 

    }

        















function cambiarMapa() {

    const LIMITE_DERECHO = 910;
    const LIMITE_IZQUIERDO = 0;
    let trayecto = "ida";


    // if Escenarios.escenario_actual.TIPO

    if (Escenarios.escenario_actual_tipo == "corto") {


 



    if ((Arquero.posicion_x >= LIMITE_DERECHO - Arquero.w) && Interfaz.mod == "single") {      
       
           trayecto = "ida";
       
       switch (Escenarios.escenario_actual) {       

        case "escenario_1" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_2";
          
            Arquero.posicion_x = 50;
            
        break;       


        case "escenario_2" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_3";
          
            Arquero.posicion_x = 50;
            
        break;    

        case "escenario_3" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_4";
            Escenarios.escenario_actual_tipo = "largo";
            Arquero.posicion_x = 50;
            
        break; 
           

        }

   }

    

    if ((Arquero.posicion_x >= LIMITE_DERECHO - Arquero.w) &&
     (Guerrero.posicion_x >= LIMITE_DERECHO - Guerrero.w) && 
        Interfaz.mod == "coop") {      
        
            trayecto = "ida";
        
        switch (Escenarios.escenario_actual) {       

        case "escenario_1" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_2";
            Arquero.posicion_x = 50;
            Guerrero.posicion_x = 50;
        break;       


        case "escenario_2" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_3";
            Arquero.posicion_x = 50;
            Guerrero.posicion_x = 50;
        break;    
            

    }

    }

    if ((Arquero.posicion_x <= LIMITE_IZQUIERDO) &&
     (Guerrero.posicion_x <= LIMITE_IZQUIERDO) && 
        Interfaz.mod == "coop") {   
            
            trayecto = "vuelta";
        

        switch (Escenarios.escenario_actual) {       

        // case "escenario_1" :
        //     cambiarFondo(Escenarios.escenario_actual);
        //     Escenarios.escenario_actual = "escenario_2";
        // break;       


        case "escenario_2" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_1";
            Arquero.posicion_x = 800;
            Guerrero.posicion_x = 800;
        break;    

        case "escenario_3" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_2";
            Arquero.posicion_x = 800;
            Guerrero.posicion_x = 800;
        break;    
            

    }

    }


    if ((Arquero.posicion_x <= LIMITE_IZQUIERDO) && Interfaz.mod == "single") {   
            
            trayecto = "vuelta";
        

        switch (Escenarios.escenario_actual) {       

        // case "escenario_1" :
        //     cambiarFondo(Escenarios.escenario_actual);
        //     Escenarios.escenario_actual = "escenario_2";
        // break;       


        case "escenario_2" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_1";
            Arquero.posicion_x = 800;
         
        break;    

        case "escenario_3" :
            cambiarFondo(Escenarios.escenario_actual, trayecto);
            Escenarios.escenario_actual = "escenario_2";
            Arquero.posicion_x = 800;
           
        break;    
            

    }

    }


    }   
  


}

   
function cambiarFondo(escenario_fondo, trayecto) {
    console.log("cambia");


    if (escenario_fondo == "escenario_1" && trayecto == "ida") {
        fondo.src = imagen_escenario_shop.src;
    }

    if (escenario_fondo == "escenario_2" && trayecto == "ida") {
        fondo.src ="./img/fondo.png";     
    }


    if (escenario_fondo == "escenario_3" && trayecto == "vuelta") {
        fondo.src = imagen_escenario_shop.src;
    }

    if (escenario_fondo == "escenario_2" && trayecto == "vuelta") {
        fondo.src = "./img/fondo.png";     
    }

  


}




function dibujarEscenario(context)  {

    if (Escenarios.escenario_actual_tipo == "corto") {

        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight); 
    }

    else if (Escenarios.escenario_actual_tipo == "largo") {

        context.drawImage(fondo_largo, Escenarios.escenario_4.fondo_x,Escenarios.escenario_4.fondo_y, fondo_largo.naturalWidth, fondo_largo.naturalHeight);
    }
     
}


