
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
        if (mod_interfaz == "coop") {    
            if (move == "move_1") {            
                this.Imagen.src = "./img/mobs/spider_move_2.png";

               
                
            }

            if (move == "move_2") {
            
                this.Imagen.src = "./img/mobs/spider_move_1.png";
              


                
                
            
            }

        }
    }








}


// let Spiders = {

//     "imagen": Imagen_spider,
//     "damage": 10,
//     "hp": 20

// }