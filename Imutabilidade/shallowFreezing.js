const book = {
    title: "Objetos imutaveis",
    category: "javascript",
    author: {
        name: "Diego",
        email: "diego@email.com"
    },
}

// O Javascript nao impoe restricoes a modificacao dos objetos
//book.category = "HTML"

//Congela o objeto e impede a modificacao
Object.freeze(book)
book.category = "css" // Nao modifica

// O Object.freeze() nao impede modificaoes profundas em objetos aninhados (shallow freezing)
book.author.name = "joao"
console.log(book)