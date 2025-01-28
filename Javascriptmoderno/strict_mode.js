"use strict"
function showMessaage() {

    
    let personName = "Diego Catalan"
    console.log("Ola", personName)
}

showMessaage()

class Student {
    get point(){
        return 7
    }
}


let student = new Student()
//tenta mudar a propriedade somente leitura
//student.point = 10


console.log(student.point)


//tentando deletar uma propriedade de um objeto que nao posso deletar
//delete window.document

//quando passamos parametros duplicados
/*function sum(a,a,c) {
    return a+a+c
}
const result = sum(1,3,2) //3+3+2 = 8
console.log("Resultado:",result)
*/