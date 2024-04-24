// 2. Escreva uma função chamada somaElementosPares que aceita um
// array de números como parâmetro e retorna a soma de todos os
// elementos pares do array

function somaElementosPares(arr) {
    return arr.reduce((soma, i) => {
        if(i % 2 === 0) {
            soma += i
        }
        return soma
    })
}

console.log(somaElementosPares([4,2,7,8,9,5]))