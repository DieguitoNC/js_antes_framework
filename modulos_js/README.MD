# Modulos
ESM MODULES - Sistema de modulos do JS
Separar o codigo em modulos
## Modulos
- Encapsulamento do codigo em modulos, permitindo a separacao de responsabilidades e reutilizacao de codigo
## Import
- Usado para incluir modulos
## Export
- Usado para expor funcionalidades de um modulo para outros
### Exportando com especifico
- Uso de { } para especificar o que sera importado do modulo
```
import { sum, multiply } from "./calc.js"

  

console.log("4 + 6 =", sum(4,6))

console.log("4 * 6 =", multiply(4,6))
```

### Exportando tudo
- Utilizacao do *
```
import * as calc from "./calc.js"

  

console.log("4 + 6 =", calc.sum(4,6))

console.log("4 * 6 =", calc.multiply(4,6))
```
### Exportacao padrao ou nomeada
- Vai importar de qualquer maneira a funcao, porem e possivel utilizar outro nome
- Nao necessita de { } para importar
```
// default export - funcao padrao fornecida pelo modulo

export default function sum(a,b) {

    return a+b

}

  
  

//named export - cada metodo e importado pelo seu proprio nome de exportacao

export function multiply(a,b){

    return a*b

}
```
### Renomear a exportacao
- No momento de exportacao, basta colocar "as" para redefinir o nome
```
export{ sum as sumTwoNumbers, multiply as multiplyTwoNumbers}
```
### Renomeando as importacoes
- Util para quando ha sobreposicao de nomes
```
import {sum as s, multiply as mult } from "./calc.js"

  

console.log("4 + 6 =", s(4,6))

console.log("4 * 6 =", mult(4,6))
```
### Usando classes nos modulos
- Pode ser utilizado classes como modulo
- e necessario istanciar a classe no main.js
```
export class Calc {

  

     sum(a,b) {

        return a+b

    }

     multiply(a,b){

        return a*b

    }

}
```
```
const calc = new Calc()
```