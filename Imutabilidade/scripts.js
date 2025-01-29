const book = {
    title: "objetos Imutaveis",
    category: "Javascript",
    author: {
        name: "Diego",
        email: "diego@email.com"
    },
}

const updatedBook = {
    ...book,
    title: "criando um front-end moderno com HTML",
    category: "HTML",
    type: "Programming"
}

//Original intacto
console.log(book)

//Modificado
console.log(updatedBook)

//Utilizando operador de desestruturacao (rest operator) para remover propriedades

const {category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)