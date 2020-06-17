document.addEventListener('DOMContentLoaded', function () {

"use strict";



let input_login = document.getElementById("input_usuario");
let input_password = document.getElementById("input_pass");
let boton_logear = document.getElementById("boton_loggear");
boton_logear.addEventListener('click', getUsersInformation );
let cuentas = [];
let boton_login = document.getElementById("boton_login");
//comprobar que los campos hayan sido completados

/*comprobar viene por default en el login button
*/




//pedir GET de usuarios
function getUsersInformation(){
   event.preventDefault();

    let apiUrl = 'https://web-unicen.herokuapp.com/api/groups/26/test';
  
    let coleccion = 'test';
    fetch(apiUrl, {
       method: "GET"
     
    })
      .then(function(response){
      if( ! response.ok ){
         console.log(response.status);
      } else {
        return response.json();
      }
    }).then(function(resultData){
      
         //al ser tipo JSON resultData es un objeto listo para usar
        //  var html = "";
         for (var i = 0; i < resultData[coleccion].length; i++) {



            
            cuentas.push(resultData[coleccion][i]['thing']);
          
            //console.log(resultData);

          // console.log(resultData[coleccion][i]['thing']['nacho']);

            // if (resultData[coleccion][i]['thing']['nacho'] == "nacho") {

            //     console.log(resultData);
            // }


            // if (resultData[coleccion][i]['thing']['nacho'].information['login'] == 'nacho') {

            //     console.log("aparecio nacho " +resultData);
            // }

            // else {

            //     console.log("no encontrado");
            // }


        //    html += "Id: " + resultData[coleccion][i]['_id'] + "<br />";
        //    html += "Informacion: " + JSON.stringify(resultData[coleccion][i]['thing']) + "<br />";
        //    html += "--------------------- <br />";
         }



        //  for (let j = 0 ; j < cuentas.length ; j ++) {

       // console.log(cuentas[1]['login']);
            
       //cuentas[1]['login'] == "nacho"


          //   if (input_login.value !== cuentas[1]['login']) {

          //       alert("usuario incorrecto");
              
              

          //   }  
            
          //   else if (input_password.value !== cuentas[1]['password']) {

          //       alert("contraseña incorrecta");
              
                
          //   }

          //   if (input_login.value !== cuentas[2]['login']) {

          //     alert("usuario incorrecto");
            
            

          // }  
          
          // else if (input_password.value !== cuentas[2]['password']) {

          //     alert("contraseña incorrecta");
            
              
          // }




            if (input_login.value == cuentas[1]['login'] && input_password.value == cuentas[1]['password'] ) {

                
                console.log("usuario conectado");
                alert("Bienvenido Nacho");

                document.getElementById('id01').style.display='none';

                user_loged_in = true;
                //boton_login.style.display = 'none';
                //cargar juego con datos del usuario

                Arquero.nivel = cuentas[1]['nivel'];
                Arquero.exp = cuentas[1]['exp'];
                Arquero.gold = cuentas[1]['gold'];
                Stats.arquero.fuerza = cuentas[1]['stats']['fuerza'];
                Stats.arquero.agilidad = cuentas[1]['stats']['agilidad'];
                Stats.arquero.vitalidad = cuentas[1]['stats']['vitalidad'];
                Stats.arquero.energia = cuentas[1]['stats']['energia'];
                Stats.arquero.sabiduria = cuentas[1]['stats']['sabiduria'];

                Arquero.damage = Math.floor(base_damage + (3* Stats.arquero.agilidad));
                Arquero.defensa = Math.floor(base_defensa_arquero + (1.25 * Stats.arquero.agilidad));


                Arquero.puntos_aumento_restante = cuentas[1]['puntos_restantes'];
                

                //setInterval(sendData(cuentas[1]['login']), 10000);



                //   //guardado por intervalos
                // setInterval(function () {
                //   sendData(cuentas[1]['login'])}, 20000);







            }

            else if (input_login.value == cuentas[2]['login'] && input_password.value == cuentas[2]['password'] ) {
            
              console.log("usuario conectado");
              alert("Bienvenido Seba");

              document.getElementById('id01').style.display='none';

              user_loged_in = true;
              //boton_login.style.display = 'none';
              //cargar juego con datos del usuario

             
              

          
              Arquero.nivel = cuentas[2]['nivel'];
              Arquero.exp = cuentas[2]['exp'];
              Arquero.gold = cuentas[2]['gold'];
              Stats.arquero.fuerza = cuentas[2]['stats']['fuerza'];
              Stats.arquero.agilidad = cuentas[2]['stats']['agilidad'];
              Stats.arquero.vitalidad = cuentas[2]['stats']['vitalidad'];
              Stats.arquero.energia = cuentas[2]['stats']['energia'];
              Stats.arquero.sabiduria = cuentas[2]['stats']['sabiduria'];

              Arquero.damage = Math.floor(base_damage + (3* Stats.arquero.agilidad));
              Arquero.defensa = Math.floor(base_defensa_arquero + (1.25 * Stats.arquero.agilidad));


              Arquero.puntos_aumento_restante = cuentas[2]['puntos_restantes'];
              
              // //guardado por intervalos
                // setInterval(function () {
                //   sendData(cuentas[2]['login'])}, 20000);





          // "nivel": 1,
          // "clase": "arquero",
          // "exp": 0,
          // "gold": 0,
          // "equipamiento": [],
          // "objetos_inventario": [],
          // "vida" : 250,
          // "posicion_x": 20,
          // "posicion_y": 320,
          // "mapa_actual": "escenario_1",
          // "puntos_restantes": 0,
          // stats: {
          //     fuerza: 5,
          //     agilidad: 10,
          //     vitalidad: 10,
          //     energia: 5,
          //     sabiduria: 5
          // }






          }


         else if (input_login.value == cuentas[3]['login'] && input_password.value == cuentas[3]['password'] ) {

                
            console.log("usuario conectado");
            alert("Bienvenido Guido");

            document.getElementById('id01').style.display='none';

            user_loged_in = true;
            //boton_login.style.display = 'none';
            //cargar juego con datos del usuario

           
            

        
            Arquero.nivel = cuentas[3]['nivel'];
            Arquero.exp = cuentas[3]['exp'];
            Arquero.gold = cuentas[3]['gold'];
            Stats.arquero.fuerza = cuentas[3]['stats']['fuerza'];
            Stats.arquero.agilidad = cuentas[3]['stats']['agilidad'];
            Stats.arquero.vitalidad = cuentas[3]['stats']['vitalidad'];
            Stats.arquero.energia = cuentas[3]['stats']['energia'];
            Stats.arquero.sabiduria = cuentas[3]['stats']['sabiduria'];

            Arquero.damage = Math.floor(base_damage + (3* Stats.arquero.agilidad));
            Arquero.defensa = Math.floor(base_defensa_arquero + (1.25 * Stats.arquero.agilidad));


            Arquero.puntos_aumento_restante = cuentas[3]['puntos_restantes'];
            
            //guardado por intervalos
              // setInterval(function () {
              //   sendData(cuentas[3]['login'])}, 20000);










        // "nivel": 1,
        // "clase": "arquero",
        // "exp": 0,
        // "gold": 0,
        // "equipamiento": [],
        // "objetos_inventario": [],
        // "vida" : 250,
        // "posicion_x": 20,
        // "posicion_y": 320,
        // "mapa_actual": "escenario_1",
        // "puntos_restantes": 0,
        // stats: {
        //     fuerza: 5,
        //     agilidad: 10,
        //     vitalidad: 10,
        //     energia: 5,
        //     sabiduria: 5
        // }






        }

          else { 

              alert("Datos ingresados erroneos");

          }

        //  }

         




         //console.log(cuentas);
        //  document.querySelector("#infoGroup").innerHTML = html;
       })
      .catch(function(e){
         console.log(e);
       })
  }




//comprobar que la informacion es correcta


//cargar usuario


//pasar los datos del usuario al cliente

//iniciar juego con datos del usuario desde el cliente




//-------------------------------





});