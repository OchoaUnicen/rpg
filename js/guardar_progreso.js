let baseURL = 'https://web-unicen.herokuapp.com/api/groups/26/test/';
let id_cuenta_nacho = "5e8497f186ad11000485a93e";
let id_cuenta_seba = "5e84e790bc20280004c2b10b";
let id_cuenta_guido = "5e84eed8bc20280004c2b10c";
let id_cuenta_gonza = "5f07c902c2b93b000453f511";
let id_cuenta_utilizar = "5e8497f186ad11000485a93e";
let data;


function sendData(login_id_usuario){
  
  
  let data_nacho = {
    "thing": {
        login: "nacho",
        password: "mermelada",
        nivel: Arquero.nivel,
        clase: "arquero",
        exp: Arquero.exp,
        gold: Arquero.gold,
        equipamiento: Arquero.objetos_equipados,
        //[]
        objetos_inventario: Arquero.objetos_inventario,
        //[]
        vida: Arquero.vida,
        posicion_x: 20,
        posicion_y: 320,
        mapa_actual: "escenario_1",
        puntos_restantes: Arquero.puntos_aumento_restante,
        stats: {
        fuerza: Stats.arquero.fuerza,
        agilidad: Stats.arquero.agilidad,
        vitalidad: Stats.arquero.vitalidad,
        energia: Stats.arquero.energia,
        sabiduria: Stats.arquero.sabiduria
        }
    }
  };

  let data_guido = {
    "thing": {
        login: "guidomaster",
        password: "diamante1",
        nivel: Arquero.nivel,
        clase: "arquero",
        exp: Arquero.exp,
        gold: Arquero.gold,
        equipamiento: [ ],
        objetos_inventario: [ ],
        vida: Arquero.vida,
        posicion_x: 20,
        posicion_y: 320,
        mapa_actual: "escenario_1",
        puntos_restantes: Arquero.puntos_aumento_restante,
        stats: {
        fuerza: Stats.arquero.fuerza,
        agilidad: Stats.arquero.agilidad,
        vitalidad: Stats.arquero.vitalidad,
        energia: Stats.arquero.energia,
        sabiduria: Stats.arquero.sabiduria
        }
    }
  };

  let data_seba = {
    "thing": {
        login: "sebeishon",
        password: "seba102",
        nivel: Arquero.nivel,
        clase: "arquero",
        exp: Arquero.exp,
        gold: Arquero.gold,
        equipamiento: [ ],
        objetos_inventario: [ ],
        vida: Arquero.vida,
        posicion_x: 20,
        posicion_y: 320,
        mapa_actual: "escenario_1",
        puntos_restantes: Arquero.puntos_aumento_restante,
        stats: {
        fuerza: Stats.arquero.fuerza,
        agilidad: Stats.arquero.agilidad,
        vitalidad: Stats.arquero.vitalidad,
        energia: Stats.arquero.energia,
        sabiduria: Stats.arquero.sabiduria
        }
    }
  };

  let data_gonza = {
    "thing": {
        login: "gonza",
        password: "gonzer",
        nivel: Arquero.nivel,
        clase: "arquero",
        exp: Arquero.exp,
        gold: Arquero.gold,
        equipamiento: Arquero.objetos_equipados,
        //[]
        objetos_inventario: Arquero.objetos_inventario,
        //[]
        vida: Arquero.vida,
        posicion_x: 20,
        posicion_y: 320,
        mapa_actual: "escenario_1",
        puntos_restantes: Arquero.puntos_aumento_restante,
        stats: {
        fuerza: Stats.arquero.fuerza,
        agilidad: Stats.arquero.agilidad,
        vitalidad: Stats.arquero.vitalidad,
        energia: Stats.arquero.energia,
        sabiduria: Stats.arquero.sabiduria
        }
    }
  };


  switch(login_id_usuario) {
    
    case "nacho": id_cuenta_utilizar = id_cuenta_nacho;
    data = data_nacho;
    break;
    case "sebeishon": id_cuenta_utilizar = id_cuenta_seba;
    data = data_seba;
    break;
    case "guidomaster": id_cuenta_utilizar = id_cuenta_guido;
    data = data_guido;
    break;

    case "gonza": id_cuenta_utilizar = id_cuenta_gonza;
    data = data_gonza;
    break;
    

  }




  
  // let data = {
  //   "thing": {
  //       login: "nacho",
  //       password: "mermelada",
  //       nivel: Arquero.nivel,
  //       clase: "arquero",
  //       exp: Arquero.exp,
  //       gold: Arquero.gold,
  //       equipamiento: [ ],
  //       objetos_inventario: [ ],
  //       vida: Arquero.vida,
  //       posicion_x: 20,
  //       posicion_y: 320,
  //       mapa_actual: "escenario_1",
  //       puntos_restantes: Arquero.puntos_aumento_restante,
  //       stats: {
  //       fuerza: Stats.arquero.fuerza,
  //       agilidad: Stats.arquero.agilidad,
  //       vitalidad: Stats.arquero.vitalidad,
  //       energia: Stats.arquero.energia,
  //       sabiduria: Stats.arquero.sabiduria
  //       }
  //   }
  // };
 
  fetch(baseURL + id_cuenta_utilizar, {
    "method": "PUT",
    
    "headers": { "Content-Type": "application/json" },
    "body": JSON.stringify(data)
  }).then(function(r){
    if(!r.ok){
      console.log("Error")
    }
    
    return r.json()
  })
  .then(function(json) {
    
        console.log("se guardo con exito usuario "+ login_id_usuario + json);
    //contenedor.innerHTML = JSON.stringify(json);
  })
  .catch(function(e){
    console.log(e)
  })

}

//document.querySelector("button").addEventListener('click', sendData)
