//5. Escreva uma função chamada validarDados que aceita uma função de
// validação e um objeto como parâmetros. A função deve usar a
// função de validação para verificar se os dados no objeto
// atendem à condição especificada e retornar true se sim,
// ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)

function validarDados(func, ob) {
    return func(ob.idade)
}

console.log(validarDados((a) => a > 18, {idade: 18}))