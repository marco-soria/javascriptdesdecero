/*
Enumerable
for in loop is used to iterate over the properties of an object.

for (variable in object) {
    code block to be executed
    }


*/


const listaDeCompras={
    manzana:5,
    pera:3,
    naranja:2,
    uva:1,
};

for(fruta in listaDeCompras){
    console.log(fruta);
}


for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

for(fruta of listaDeCompras){
    console.log(fruta);
} // not iterable