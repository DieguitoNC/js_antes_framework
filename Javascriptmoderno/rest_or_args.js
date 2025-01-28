function values(...rest) {
    //Mostra a quantidade de parametros
    console.log(rest.length)
    //Exibindo o conteudo do array
    console.log(...rest)
    //Exibe o coteudo do rest que é um array
    console.log(rest)
}

values(2,1,3,4)