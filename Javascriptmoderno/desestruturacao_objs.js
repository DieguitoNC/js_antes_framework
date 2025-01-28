const product = {
    description: "Teclado",
    price: 150
}

const {description, price} = product
console.log("Descricao:", description)
console.log("Preco: R$", price)


function newProduct({description, price}) {
    console.log("### NOVO PRODUTO ###")
    console.log("Descricao:", description)
    console.log("Preco: R$", price)
}

newProduct({
    description: "mouse",
    price: 70
})