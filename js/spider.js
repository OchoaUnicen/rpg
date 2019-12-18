
class Spider {
    constructor(damage, hp) {
        
        this.damage = damage;
        this.hp = hp;
        this.Imagen;
    }
    
    talk () {

        console.log("Its alive");

    }


    get Imagen() {

        return this.setImagen();

    }

    setImagen() {

    let Imagen_spider = new Image();
    Imagen_spider.src = "./img/mobs/spider_move_1.png";


    return Imagen_spider;

    }





}


// let Spiders = {

//     "imagen": Imagen_spider,
//     "damage": 10,
//     "hp": 20

// }