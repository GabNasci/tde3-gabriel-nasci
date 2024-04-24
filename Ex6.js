//6. Escreva uma função chamada gerarLista que aceita um número
// inteiro positivo n e uma função de geração como parâmetros.
// A função de geração deve receber um índice e retornar o
// valor correspondente da lista. A função gerarLista deve
// criar uma lista de tamanho n, preenchendo cada elemento
// com o resultado da função de geração.

function gerarLista(n, func) {
    let arr = []
    for (let i = 0; i <= n ; i++) {
        arr.push(func(i))
    }
    return arr
}

console.log(gerarLista(10, (a) => a**2))