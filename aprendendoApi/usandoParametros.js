
async function fetchProductsById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

//fetchProducts()
fetchProductsById(1)