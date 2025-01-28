const data =["Diego Catalan", "diego@email.com"]

//desestruturando array
const [username, email] = data
console.log("nome:", username)
console.log("Email:", email)

const fruits = ["banana", "apple", "Orange"]

// Desestruturar somente o primeiro
const [banana] = fruits
console.log(banana)


//Ignorando o primeiro na desestruturacao
const [_, apple] = fruits
console.log(apple)

//ignorar o primeiro e o segundo na desestruturacao
const [, , orange] = fruits
console.log(orange)