
class Spider {
    constructor(damage, hp) {        
        this.damage = damage;
        this.hp = hp;
        this.max_hp = hp;
        this.Imagen = new Image();
        this.Imagen.src = "./img/mobs/spider_move_1.png";
        this.posicion_x = 900;
        this.posicion_y = 200;
        this.animacion = "move_1";
        this.muerto = false;
        this.exp = 50;
        this.direccion = "izquierda"
        this.recorrido_cooldown = 80;
        this.spawn_time = 0;
        
    }    
    talk () {
        console.log("Its alive");
    }
    respawnSpider() {
        this.hp = 100;
        this.posicion_x = 800;
        this.posicion_y = 350;
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
        
        
        if (this.direccion == "izquierda") {
            context.drawImage(this.Imagen, this.posicion_x, this.posicion_y);
        }

       else if (this.direccion == "derecha") {
        context.save();

        context.translate(this.posicion_x + this.Imagen.width * 2, this.posicion_y + this.Imagen.height);
        context.scale(-1,1);

        // context.rotate(60 * Math.PI / 180);
         context.drawImage(this.Imagen, this.Imagen.width , -this.Imagen.height );

        //context.drawImage(Guerrero.imagen_izquierda, Guerrero.posicion_x, Guerrero.posicion_y, Guerrero.imagen_izquierda.naturalWidth, Guerrero.imagen_izquierda.naturalHeight);
        // Reset transformation matrix to the identity matrix
        context.restore();
       }


       
    }

    moverSpider (muerto) {
        let distancia_arquero_spider = Math.abs(this.posicion_x - Arquero.posicion_x);
        let distancia_arquero_spider_y = Math.abs(this.posicion_y - Arquero.posicion_y);
        if (muerto == false) {         
            if (this.posicion_x > Arquero.posicion_x && distancia_arquero_spider < 400  && distancia_arquero_spider_y < 200 && Arquero.muerto == false ) {           
                this.posicion_x -= 2;
            }


            else if (this.posicion_x < Arquero.posicion_x  && distancia_arquero_spider < 400  && distancia_arquero_spider_y < 200 && Arquero.muerto == false) {
                this.posicion_x += 2;
            }

        
            
            if (Escenarios.escenario_actual == "escenario_3" && (distancia_arquero_spider > 400 || Arquero.muerto == true)) {
               
               
                if (this.direccion == "izquierda") {
                    this.posicion_x -= 2;
                    
                }else if (this.direccion == "derecha") {
                    this.posicion_x += 2;
                }
             


              this.recorrido_cooldown -=1;

              if (this.recorrido_cooldown == 0) {

                if (this.direccion == "izquierda") {
                    this.direccion = "derecha"
                }else if (this.direccion == "derecha") {
                    this.direccion = "izquierda"
                }
                this.recorrido_cooldown = 80;

              }
                




                

                // if (distancia_recorrida > 0 && this.direccion == "izquierda") {
                //     this.posicion_x -= 2;
                //     distancia_recorrida -= 2;
                // }
                // else if (distancia_recorrida > 0 && this.direccion == "derecha") {
                //     this.posicion_x += 2;
                //     distancia_recorrida -= 2;

                // }

                // else if (distancia_recorrida <= 0) {
                  

                //     if (this.direccion == "derecha") {
                //         this.direccion = "izquierda";
                //     }
                //     if (this.direccion == "izquierda") {
                //         this.direccion = "derecha";
                //     }
                   

                //     distancia_recorrida = 50;
                // }

            }
        }
        
    }   


    mostrarHp(context) {
        
        context.beginPath();
        context.rect(this.posicion_x, this.posicion_y -40 , this.hp , 8);
        // max_width_barra_hp
        context.lineWidth = "13";
        context.strokeStyle = "red";
        context.stroke();
        
        context.fillText("     "+ this.hp + "/" + this.max_hp, this.posicion_x, this.posicion_y - 30);
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