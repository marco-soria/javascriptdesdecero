/*

juguemos a adivinar la palabra

el usuario tiene 3 intentos para adivinar la palabra oculta

requerimientos:

- el juego debe tener una palabra oculta
- el juego puede dar 1 pista de la palabra
- el usuario debe ingresar una suposicion
- el juego debe verificar si la suposicion es correcta

- el juego debe tener un numero limitado de intentes
- el juego debe mostrar cuantos intentos le quedan al usuario
- el juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos


*/





let palabraOculta="javascript";

let intentos=3;

function verificarSuposicion(suposicion,palabraOculta){
    if(suposicion.toLowerCase()===palabraOculta){
        return true;}
return false;
}


function jugarAdivinaLaPalabra(){
    alert("Bienvenido a jugar adivina la palabra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert("-pista- la palabra oculta es un lenguaje de programacion");
    
    while(intentos>0){
        let suposicion=prompt("Adivina la palabra: ");

        if(verificarSuposicion(suposicion,palabraOculta)){
            alert("Â¡Correcto! Has adivinado la palabra.");
            break;
        }else{
            intentos--;
            if(intentos>0){
                alert(`Incorrecto, Aun tienes ${intentos} intento restantes`);}
                else{
                    alert(`Agotaste tus intentos, la palarba oculta era ${palabraOculta}`);
            }}}}


 jugarAdivinaLaPalabra();