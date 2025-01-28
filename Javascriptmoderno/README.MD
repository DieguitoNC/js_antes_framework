# Java script moderno

## Strict mode
O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar excecoes no JS

## Desestruturação de array (destructuring assigment)
- Permite extrair dados de arrays ou objetos em variaveis distintas

## Desestruturacao de objetos
- Permite extrair dados de arrays ou objetos em variaveis distintas
- Muito bom para nao depender da ordem que os parametros sao passados

##  rest params ou args
- Permite representar um numero indefinido de argumentos como array

## Spread
- Spread (espalhar) permite que um objeto iteravel, como uma expressao de array ou uma string seja expandida para ser usada onde zero ou mais argumentos
- Por exemplo, se temos uma lista com objetos, ela ja devolve os objetos "soltos"

# Metodos de array

## Método map()
chama a funcao de callback recebida por parametro para cada elemento do array original, em ordem, e constroi um novo array com base nos retornos de cada chamada. No final devolve um novo array

## Método filter()
- Cria um novo array com todos os elementos que passaram na condicao

## Método findIndex()
O metodo retorna o indice no array do primeiro elemento que satisfazer a condicao. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste

## Método find()
Retorna o valor do primeiro elemento do array que satisfazer a condicao. Caso contrario, undefined é retornado

## Método every()
Testa se todos os elementos do array passam na condicao e retorna um valor boolean

## Método some()
Testa se ao menos um dos elementos no array passa na condicao e retorna um valor true ou false

## Método reduce()
Utilizado para reduzir o array para um unico valor
- Array original (values)
- Acumulador (accumulator)
- Valor da Iteracao (currentValue)
- Valor inicial (0)
- Index (index da iteacao atual - opcional)