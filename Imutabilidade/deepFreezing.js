const book = {
    title: "objetos imutaveis",
    category: "javascript",
    author: {
        name: "Diego",
        email: "diego@email.com",
    },
}

function deepFreeze(object) {

    //Obtem um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    //Itera sobre todas as propriedades do objeto
    for(const prop of props) {
        //Obtem o valor associado a propriedade atual
        const value = object[prop]

        //Verifica se o valor e um objeto ou funcao para continuar aplicando deepFreeze em objetos aninhados
        if(value && typeof value ==="object" || typeof value=== "function"){
            deepFreeze(value)
        }
    }

    //Retorna objeto congelado
    return Object.freeze(object)
}

//chama a funcao para congelar o objeto com deep freeze (congelamento profundo)
deepFreeze(book)

book.category = "HTML"
book.author.name = "kevin"
console.log(book)