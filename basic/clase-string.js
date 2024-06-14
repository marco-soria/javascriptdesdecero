// creaci+on de string
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas invertidas`;

// 1. concatenación: opción +
const direccion='Calle falsa 123'
const ciudad='Springfield'
const direccionCompleta='Mi direcciÃ³n completa es '+direccion+ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio='Mi direcciÃ³n completa es '+direccion+' '+ciudad
console.log(direccionCompletaConEspacio)

// 2. concatenación: template literals
const nombre='Estefany'
const pais='ðŸ‡¨ðŸ‡´'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)


// 3. concatenación: join()
const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='ðŸ‡²ðŸ‡½'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' ðŸŒ¯ '))

// 4. concatenación: concat()
const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)

const escapeAlternativo="I'm Software Engineer"
const escapeBarraInvertida='I\'m Software Engineer'
const escapeComillaInvertida=`I'm Software Engineer`

//Escritura de Strings Largos
const poema='Las rosas son rojas,\n'+
            'Las violetas son azules,\n'+
            'Caracter inesperado,\n'+
            'En la lí­nea 86.'
console.log(poema)

const poema2='Las rosas son rojas,\n\
            Las violetas son azules,\n\
            Caracter inesperado,\n\
            En la lí­nea 86.'
console.log(poema2)

const poema3=`Las rosas son rojas,
            Las violetas son azules,
            Caracter inesperado,
            En la lí­nea 86.`
console.log(poema3)