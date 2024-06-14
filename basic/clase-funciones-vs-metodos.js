// 1 pasar funciones como argumentos _> callback

function a(){}
function b(a){}
b(a)

// retornar funciones
// funcion declarativa
function a()
{
    function b(){}
    return b
}

//asignar funciones a variables 
// funcion expresiva
const a = function(){}

// tener propiedades y metodos
function a(){}
const obj={}
a.call(obj)

function a(){
    function b(){
        function c(){}
        c()
    }
    b()
}
a()

// funciones como metodos
const rocket={
    name:'Falcon 9',
    launchMessage:function launchMessage(){
        console.log('ðŸ”¥')
    }
}

rocket.launchMessage()