// methods that do not modify the original array inmutable

const ages=[21,25,30,19,22]
const allAreAdults=ages.every(age=>age>20)

console.log(ages) // [21,25,30,19,22]
console.log(allAreAdults) // false

const atLeastOneIsOver30=ages.some(age=>age>30)

console.log(ages) // [21,25,30,19,22]
console.log(atLeastOneIsOver30) // true