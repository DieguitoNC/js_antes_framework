const adress1 = {
    street: "Av. Brasil",
    number: 20
}

// Isso nao e uma copia. E uma referencia
//const adress2 = adress1
//adress2.number = 30


//Criacao de um novo objeto, utilizando as propriedades e valores de adress 1
const adress2 = {...adress1, number:30}


console.log(adress1,adress2)


//Exemplo com array
const list1 = ["apple", "banana"]

//const list2 = list1
//list2.push("watermelon")

const list2 = [...list1, "watermelon"]
//list2.push("watermelon")
console.log(list1,list2)