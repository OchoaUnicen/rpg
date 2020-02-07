document.addEventListener('DOMContentLoaded', function () {

let boton_controles = document.getElementById('boton_controles');
boton_controles.addEventListener('click', mostrarControles);


let contenedor_controles_player1 = document.querySelector("#contenedor_controles_player1");

let contenedor_controles_player2 = document.querySelector("#contenedor_controles_player2");


let mostrandoControles = false;


function mostrarControles() {

   
    if (mostrandoControles == false) {
       

        contenedor_controles_player1.style.display = "flex";
        contenedor_controles_player2.style.display = "flex";
        mostrandoControles = true;
    }

    else if (mostrandoControles == true) {

        contenedor_controles_player1.style.display = "none"
        contenedor_controles_player2.style.display = "none"

        mostrandoControles = false;
    }

}




});