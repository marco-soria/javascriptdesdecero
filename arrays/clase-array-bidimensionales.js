let array1D=[1,2,3]
let array2D=[[1,2,3],[4,5,6],[7,8,9]]

let matrix=[
    [1,2,3],[4,5,6],[7,8,9]
]

matrix[1][2]=10
console.log(matrix) // [[1,2,3],[4,5,10],[7,8,9]]

let value=matrix[0][1]
console.log(value) // 2

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j])
    }
}


function findElement(matrix,element){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===element){
                return true
            }
        }
    }
    return false
}

console.log(findElement(matrix,5)) // true

function duplicateMatrix(matrix){
    let newMatrix=[]
    for(let i=0;i<matrix.length;i++){
        newMatrix[i]=[...matrix[i]]
    }
    return newMatrix
}

console.log(duplicateMatrix(matrix)) // [[1,2,3],[4,5,10],[7,8,9]]