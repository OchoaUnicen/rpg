let imagen_arco_golden_bow = new Image();
imagen_arco_golden_bow.src = "./img/golden_bow.png";


let Equipamiento = {
    
    "arquero": {

        "armas" : {

            "golden_bow": {

                "nombre": "Golden Bow",
                "tipo": "arco",
                "precio_npc": 40,
                "imagen": imagen_arco_golden_bow,
                "damage": 5

            },

            "bow": {


                "imagen": arco,
                "nombre": "Bow",
                "nivel": 1,
                "clase": "arquero",
                "tipo": "normal",
                "mas" : 0, 
                "precio_npc": 10,
                "opciones" : []

                // "nombre": "Bow",
                // "tipo": "arco",
                // "precio_npc": 10,
                // "imagen": arco,
                // "damage": 1

            }


        }

    }

}