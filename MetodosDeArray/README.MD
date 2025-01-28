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