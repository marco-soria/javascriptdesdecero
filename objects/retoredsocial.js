/* 
Requerimientos del reto:

1. el usuario debe poder ignresar su usuario y contraseña
2. el sistema debe validar si el usuario y contraseña existen en la BBDD
3. si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario
4. si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error

*/


const usersDatabase=[
    {
        username:"andres",
        password:"123",
    },
    {
        username:"caro",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
];
        
const usersTimeline=[
    {
        username:"Estefany",
        timeline:"Me encata Javascript!",
    },
    {
        username:"Oscar",
        timeline:"Bebeloper es lo mejor!",
    },
    {
        username:"Mariana",
        timeline:"A mi me gusta mas el cafe que el te",
    },
    {
        username:"Andres",
        timeline:"Yo hoy no quiero trabajar",
    },
];

const username=prompt("Cual es tu usuario?");
const password=prompt("Cual es tu contraseña?");

function usuarioExistente(username,password){
    for(let i=0; i<usersDatabase.length;i++){
        if(
            usersDatabase[i].username===username &&
            usersDatabase[i].password===password
        ){
            return true;

        }
    }
return false;}

function signIn(username,password){
    if(usuarioExistente(username,password)){
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    }else{
        alert("Uuups, usuario o contraseÃ±a incorrectos!");
    }
}

signIn(username,password);