let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    if (value === 0) {
        console.log("FELIZ ANO NOVO!!")

        // Interrompe o intervalo de execucoes
        clearInterval(interval)
    }
}, 1000)