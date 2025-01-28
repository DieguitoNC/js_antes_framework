const products = ["teclado", "mouse", "monitor"]



//Percorrendo os itens do Array
products.map((product) =>{
    console.log(product)
})

//Sintaxe reduzida
products.map((product)=>console.log(product))

//Utilizando o novo objeto retornado
const formatted = products.map((product)=> {
    //return product.toUpperCase()

    return {
        id: Math.random(),
        description: product,
        price: 150
    }
})

console.log(formatted)