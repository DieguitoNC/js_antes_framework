// Utilizar o fetch com async/wait
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

fetchProducts()