// funciones puras



// funciones impuras
// 1. modificar variables globales
// 2. modificar argumentos
// 3. solicitudes http	
// 4. console.log imprimir en consola
// 5. manipular el dom
// 6. obtener la fecha actual

//pura
function sum(a,b){
    return a+b
}

//impura
function sum(a,b){
    console.log('A: ',a)
    return a+b
}

//impura
let total=0

function sumWithSideEffect(a){
    total+=a
    return total
}

//pura
function square(x){
    return x*x
}

//pura
function addTen(y){
    return y+10
}

//combina funciones puras . ES pura
const number=5
const finalResut=addTen(square(number))
console.log(finalResut)