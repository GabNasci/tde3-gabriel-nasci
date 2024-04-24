//4. Escreva uma função chamada filtrarArray que aceita uma função de
// filtro e um array como parâmetros. A função de filtro deve retornar
// true caso o elemento deva permanecer no array e false caso contrario.
// A função filtrarArray deve aplicar essa função a todos os elementos e
// retornar um novo array apenas com os elementos restantes

function filtrarArray(func,arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filtrarArray((a) => a % 2 !== 0, [1,2,3,4,5]))