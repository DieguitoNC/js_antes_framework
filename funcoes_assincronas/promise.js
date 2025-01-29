//Funcao que retorna uma promise

function asyncFunction() {
    return new Promise((resolve,reject) => {
        //Simula uma operacao assincrona

        setTimeout(() => {
        const isSuccess = true

            if(isSuccess) {
                resolve("A operacao foi concluida com sucesso")
            }else {
                reject("Algo deu errado")
            }
        },3000) // Simula uma operacao que leva 3 segundos
    })
}

//visualizar que o retorno e uma promise

//console.log(asyncFunction())
console.log("Executando funcao assincrona...")

const response = asyncFunction()
console.log(response)
/*
asyncFunction()
    .then((response) => {
        console.log("Sucesso", response)
    })
    .catch((error) => {
        console.log("Error", error)
    })
    .finally(() =>{
        console.log("Fim da Execucao")
    })
*/