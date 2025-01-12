// 1. Copying an Array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray) // [1, 2, 3, 4, 5]
console.log(copyOfAnArray) // [1, 2, 3, 4, 5]

// 2. Combining Arrrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1) // [1, 2, 3]
console.log(array2) // [4, 5, 6]
console.log(combinedArray) // [1, 2, 3, 4, 5, 6]

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray) // [1, 2, 3]
console.log(arrayWithAdditionalElements) // [1, 2, 3, 4, 5, 6]

// 4. Pass elements to functions

function sum (a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers) 

console.log(result) // 6