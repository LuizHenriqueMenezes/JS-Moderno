// Rest params é pra passar quantos parâmetros quiser na function (obs: smp colocar no final)

function sum(...numbers) {
    return numbers.reduce((acumulador, num) => acumulador + num, 0)
}

//reduce() executa a função de callback uma vez para cada elemento presente no array

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2))
console.log(sum(32, 5, 74, 7, 1, 9, 90))