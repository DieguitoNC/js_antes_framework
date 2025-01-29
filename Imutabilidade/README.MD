# Imutabilidade
Voce nao pode modificar seus valores ou propriedades. Em vez disso, vc cria uma copia modificada para manter o original inalterado
Com isso, sabemos determinar mais facil quando ocorre uma alteracao e com isso é possivel determinar quando um componente deve ser renderizado novamente

## Shallow e Deep Copy
copia superficial nao pega os itens aninhados
Deep copy, permite alterar um sem alterar outro

## Shallow freezing
Object.freeze(book)
Vai fazer com que um objeto nao consiga ser alterado

## Deep freeze
Faz com que objetos aninhados tambem nao possam ser modificados

## Manipulando objetos imutáveis
Podemos modificar algo com spread 
Tambem remover com desestruturador alguma parte