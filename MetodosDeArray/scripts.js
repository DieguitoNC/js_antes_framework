const values = [1,2,3,4,5]
const sum = values.reduce((accumulator,currentValue,index) => {
    /*
    console.log("Acumulador", accumulator)
    console.log("Current value", currentValue)
    console.log("Index",index)

    console.log("soma",accumulator+currentValue)
    console.log("#######################")
    */
    return accumulator+currentValue
}, 0)


console.log("Resultado da soma final:", sum)