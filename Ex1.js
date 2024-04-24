// 1. Escreva uma função chamada encontrarMaiorElemento que
// aceita um array de números como parâmetro e retorna o
// maior elemento do array.

function encontratMaiorElemento(arr) {
    let maior = 0;
    for (let i = 0; i < arr.length; i++) {
        if(maior < arr[i]) {
            maior = arr[i]
        }
    }

    return maior
}

console.log(encontratMaiorElemento([1,40,7,9,10]))
