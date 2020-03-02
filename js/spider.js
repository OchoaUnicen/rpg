
class Spider {
    constructor(damage, hp) {        
        this.damage = damage;
        this.hp = hp;
        this.Imagen = new Image();
        this.Imagen.src = "./img/mobs/spider_move_1.png";
        this.posicion_x = 900;
        this.posicion_y = 200;
        this.animacion = "move_1";
        this.muerto = false;
        this.exp = 50;
    }    
    talk () {
        console.log("Its alive");
    }
    respawnSpider() {
        this.hp = 100;
        this.posicion_x = 900;
        this.posicion_y = 200;
        this.muerto = false;
    }

    // controlarEstado() {
    //     if (this.muerto == true) {    
    //     }
    // }
//     get Imagen() {
//         return this.setImagen();
//     }
//     setImagen() {
//     let Imagen_spider = new Image();
//     Imagen_spider.src = "./img/mobs/spider_move_1.png";
//    // return Imagen_spider;
//     }
    //esto no fuinciona 
    dibujarSpider(context) {        
        context.drawImage(this.Imagen, this.posicion_x, this.posicion_y);
    }

    moverSpider (muerto) {
        if (muerto == false) {         
            if (this.posicion_x > Arquero.posicion_x) {           
                this.posicion_x -= 2;
            }
            else if (this.posicion_x < Arquero.posicion_x) {
                this.posicion_x += 2;
            }
        }
    }   


    mostrarHp(context) {
        context.fillText("Spider Hp: " + this.hp, this.posicion_x, this.posicion_y - 30);
    }


    animarSpider(mod_interfaz, move) {
        //faltaria agregar al if que los personajes esten en la misma sala "escenario_3"
        if (mod_interfaz == "coop" || (mod_interfaz == "single")) {    
            if (move == "move_1") {            
                this.Imagen.src = "./img/mobs/spider_move_2.png";                
            }
            if (move == "move_2") {            
                this.Imagen.src = "./img/mobs/spider_move_1.png";            
            }
        }
    }

    dropObject(context) { 

        let drop_gold = 20;
        let dropEquipamiento = false;
        let dropConsumible = false;  
        let posX = this.posicion_x;
        let posY = this.posicion_y;  
        let chanceDeDrop = Math.floor(Math.random() * (3 - 0));
        console.log(chanceDeDrop);
        switch (chanceDeDrop) {
            case 0:{ console.log("No drops");}
            break;
            case 1: {console.log("Drops bow");        
            Escenarios.escenario_3.dropped_items.push(Equipamiento.arquero.armas.golden_bow, this.posicion_x, this.posicion_y);
            //droppedObjects(context,Equipamiento.arquero.armas.golden_bow,this.posicion_x,this.posicion_y );           
        }
            break;
            case 2: {console.log("Drops consumable");}
            break;
        }




        if (Interfaz.mod == "single") {

            Arquero.gold += drop_gold;

        }


        if (Interfaz.mod == "coop") {
            Arquero.gold += drop_gold;
            Guerrero.gold += drop_gold; 

        }

    }
    // droppedObjects(context, droppedObject , posX, posY) {
    //     context.drawImage(droppedObject.imagen,posX ,posY);     
    // }

}
// let Spiders = {

//     "imagen": Imagen_spider,
//     "damage": 10,
//     "hp": 20

// }