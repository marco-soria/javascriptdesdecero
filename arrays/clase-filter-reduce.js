// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumbers) // [2, 4, 6, 8, 10]

// reduce() Â· case 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce) // [1, 2, 3, 4, 5]
console.log(sum) // 15

// reduce() Â· case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

console.log(wordFrecuency) // { apple: 1, banana: 2, hello: 1, bye: 3 }

// Exercise: Passing Grade Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original Grades: ', grades) // [85, 92, 60, 78, 95, 66, 88, 50, 94]
console.log('Passing Grades: ', passingGrades) // [85, 92, 78, 95, 88, 94]
console.log('Average Passing Grade: ', averagePassingGrade) // 88.66666666666667