
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


let Escenarios = {
    "escenario_actual": "escenario_1",
    "escenario_1": escenario_1 =    {
        "nombre": "Lobby",
        "imagen": fondo,  
        "misc": {
            "imagen_cartel": imagen_cartel,
            "cartel_posX": 740,
            "cartel_posY": 292
        }      
    },
    "escenario_2": escenario_2 =    {
        "nombre": "Shop",
        "imagen": imagen_escenario_shop,        
    },

    "escenario_3": escenario_3 =    {
        "nombre": "Bosque Spider",
        "imagen": fondo,
        "dropped_items": []      
    }


}



function droppedObjects(context, droppedObject , posX, posY) {


    context.drawImage(droppedObject.imagen,posX ,posY);     
}














function cambiarMapa() {

    const LIMITE_DERECHO = 910;
    const LIMITE_IZQUIERDO = 0;
    let trayecto = "ida";

    
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
        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);   
}


