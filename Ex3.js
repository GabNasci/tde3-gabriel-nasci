//3. Escreva uma função chamada mapearArray que aceita uma função e
// um array como parâmetros. A função mapearArray deve aplicar a
// função recebida a cada elemento do array e retornar um
// novo array com os elementos resultantes.

function mapearArray(func, arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
    return arr
}

console.log(mapearArray((a) => a+1, [1,2,3,4,5]))

