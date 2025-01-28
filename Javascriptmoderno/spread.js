const numbers = [1,2,3]
console.log(numbers)

//Spread
console.log(...numbers)

//criando obj
const data = [
    {
        name: "diego",
        email: "diego@email.com",
        avatar: "d.png"
    },
    {
        name: "joao",
        email: "joao@email.com",
        avatar: "joao.png"
    }
]
//utilizando o spread no array com objetos
console.log(data)
console.log(...data)