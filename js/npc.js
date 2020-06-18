let imagen_pop_up_globito_z = new Image();
imagen_pop_up_globito_z.src = "./img/interfaz/pop_up_quest_press_z.png";


let imagen_malcom_dialogo_1 = new Image();
imagen_malcom_dialogo_1.src = "./img/misc/npc_dialogo_quest.png";

let Npcs = {

    "nombre": "Malcom",
    "primera_vez": true,
    "estado_quest": "sin pedir",
    "dialogos" : {
        "dialogo_actual": "dialogo_0",
        "dialogo_0" : "nada",
        "dialogo_1": imagen_malcom_dialogo_1,
        
        
           
        

    },
    //sin pedir - en progreso - entrega - finalizada
    "imagen": imagen_pop_up_globito_z,

    x : 431,
    y : 270,
    w : 100,
    h : 100


}





function mostrarInteraccionesQuests(context){

    if ((Interfaz.mod == "single" || Interfaz.mod == "coop") && Arquero.posicion_x < Npcs.x + 20
    && Arquero.posicion_x > Npcs.x - 60 && Escenarios.escenario_actual == "escenario_2" && Npcs.dialogos.dialogo_actual == "dialogo_0") {

        context.drawImage(Npcs.imagen, Npcs.x, Npcs.y);
        console.log("dibuja globito z");
    }

   
     if ((Interfaz.mod == "single" || Interfaz.mod == "coop") && ((Arquero.posicion_x > Npcs.x + 20
        && Arquero.posicion_x <= Npcs.x + 60) ||(Arquero.posicion_x > Npcs.x - 90 && Arquero.posicion_x < Npcs.x - 60))
         && Escenarios.escenario_actual == "escenario_2") {

            
            Npcs.dialogos.dialogo_actual = "dialogo_0";
            console.log("dialogo se vuelve 0");
    }

    else if ((Interfaz.mod == "single" || Interfaz.mod == "coop") && Arquero.posicion_x < Npcs.x + 20
    && Arquero.posicion_x > Npcs.x - 60 && Escenarios.escenario_actual == "escenario_2" ) {
        //&& Npcs.dialogos.dialogo_actual == "dialogo_1"



        switch(Npcs.dialogos.dialogo_actual) {

            case "dialogo_1":  context.drawImage(Npcs.dialogos.dialogo_1, Npcs.x - 82, Npcs.y + 95, 310, 150, Npcs.x-42, Npcs.y-86, 270, 150);
            console.log("dibja dialogo");
            break;

            case "dialogo_2": context.drawImage(Npcs.dialogos.dialogo_1, Npcs.x - 420, Npcs.y + 284, 310, 150, Npcs.x-42, Npcs.y-86, 270, 150);
            break;

            case "dialogo_3": context.drawImage(Npcs.dialogos.dialogo_1, Npcs.x - 82, Npcs.y + 284, 310, 150, Npcs.x-42, Npcs.y-86, 270, 150);
            break;

            case "dialogo_4": context.drawImage(Npcs.dialogos.dialogo_1, Npcs.x - 420, Npcs.y + 456, 310, 150, Npcs.x-42, Npcs.y-86, 270, 150);
            break;
        }



       
        //context.drawImage(fondo_1, i, j, 100, 100, i ,j ,100 ,100);
    }






}




