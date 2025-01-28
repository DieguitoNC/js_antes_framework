const values = [4,6,8,12]


//Obtendo o primeiro indice do elemento que o valor é maior do que 4
const index = values.findIndex((value) => value >  4)
console.log(index)
console.log (values[index])

//Exemplo de quando nao encontra
console.log(values.findIndex((value) => value>12))