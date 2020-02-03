
class Spider {
    constructor(damage, hp) {
        
        this.damage = damage;
        this.hp = hp;
        this.Imagen = new Image();
        this.Imagen.src = "./img/mobs/spider_move_1.png";
        this.posicion_x = 900;
        this.posicion_y = 200;
        this.animacion = "move_1";
    }
    
    talk () {

        console.log("Its alive");

    }


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



    moverSpider () {

       
        if (this.posicion_x > Arquero.posicion_x) {
           
            this.posicion_x -= 2;

        }

        else if (this.posicion_x < Arquero.posicion_x) {

            this.posicion_x += 2;

        }


    }


    animarSpider(mod_interfaz, move) {

        if (mod_interfaz == "coop") {        

        console.log("entra animarSpider");
        console.log("estado animacion " + this.animacion);

            if (move == "move_1") {
            
                this.Imagen.src = "./img/mobs/spider_move_2.png";
                console.log("entra move 1");
                

               
                
            }

            if (move == "move_2") {
            
                this.Imagen.src = "./img/mobs/spider_move_1.png";
                console.log("entra move 2");


                
                
            
            }

        }
    }








}


// let Spiders = {

//     "imagen": Imagen_spider,
//     "damage": 10,
//     "hp": 20

// }