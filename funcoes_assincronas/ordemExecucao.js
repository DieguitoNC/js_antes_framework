
//Executa o codigo de forma sincrona e o valor 1 e impresso diretamente no console
console.log(1)


// (3) Microstasks sao executadas antes de temporizadores e promessas
queueMicrotask(() =>{
    console.log(2)
})

// (5) Macrotask que aguarda o evento de temporizador ser acionado
setTimeout(() =>{
    console.log(3)
},1000)

// (2) Execucao sincrona
console.log(4)

// (4) Adiciona uma microtask
Promise.resolve(true).then(() => {
    console.log((5))
})