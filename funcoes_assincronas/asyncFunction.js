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


/*
const fetch = async() => {
    const response = await asyncFunction()
    console.log(response)
}
*/


async function fetch() {
    try{
    const response = await asyncFunction()
    console.log("Sucesso:", response)
    }catch (error){
        console.log("Erro:", error)
    } finally {
        console.log("Fim")
    }
}


fetch()