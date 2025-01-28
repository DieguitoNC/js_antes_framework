const words = ["javascript", "HTML", "CSS", "web"]

const result = words.filter((word)=> word.length > 3)
console.log(result)

const products = [
    {description: "teclado", price:150, promotion:true},
    {description: "mouse", price:70,promotion:false },
    {description: "monitor", price:900, promotion:true},
]

//Exempplo de um filtro de produtos em prromocao
const promotion = products.filter((product)=> product.promotion === true)

console.log(promotion)