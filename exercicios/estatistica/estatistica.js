const arrValues = []
const arrTC = []
let added = 0
let toDivide = 0
let x = 0

const Media_Aritmetica_Simples = (arrValues) => {
    const lengthArr = arrValues.length

    for (let i = 0; i < lengthArr; i++) {
        added = added + arrValues[i]
    }

    let result = added / lengthArr

    const pResult = document.getElementById('result')
    pResult.innerHTML = `<p id="result">Resultado da Média Aritmetica Simples: ${result}</p>`
}

const Media_Aritmetica_Ponderada = (arrValues) => {
    for (let i = 0; i < arrValues.length; i++) {
        arrTC[i] = parseFloat(prompt(`Digite o peso de ${arrValues[i]}: `))
        added += (arrValues[i] * arrTC[i])
        toDivide += arrTC[i]
    }

    const result = added / toDivide

    const pResult = document.getElementById('result')
    pResult.innerHTML = `<p id="result">Resultado da Média Aritmetica Ponderada: ${result}</p>`
}

const Mediana = (arrValues) => {
    const pResult = document.getElementById('result')

    if (arrValues.length % 2 === 0) {
        x = arrValues.length / 2
        const result = (arrValues[x - 1] + arrValues[x]) / 2
        pResult.innerHTML = `<p id="result">Resultado da Mediana: ${result}</p>`
    }else{
        x = arrValues.length / 2
        roundedPosition = Math.ceil(x)
        const result = arrValues[roundedPosition - 1]
        pResult.innerHTML = `<p id="result">Resultado da Mediana: ${result}</p>`
    }
}

const Moda = (arrValues) => {

    let numFrequency = {}; // Objeto para armazenar a frequência de cada número
    let maxFrequency = 0; // Frequência máxima encontrada
    let mode = []; // Array para armazenar os números que têm a frequência máxima

    for (let num of arrValues) {
        // Verifica se a frequência do número atual já foi iniciada
        if (numFrequency[num] === undefined) {
            numFrequency[num] = 1; // Inicializa a frequência do número como 1
        } else {
            numFrequency[num]++; // Incrementa a frequência do número
        }

        // Verifica se a frequência do número atual é maior que a frequência máxima
        if (numFrequency[num] > maxFrequency) {
            maxFrequency = numFrequency[num]; // Atualiza a frequência máxima
            mode = [num]; // Define o novo número mais frequente como a moda
        } else if (numFrequency[num] === maxFrequency) {
            mode.push(num); // Adiciona o número à lista de modas
        }
    }

    const pResult = document.getElementById('result')
    pResult.innerHTML = `<p id="result">Resultado da Moda: ${mode}</p>`
}


document.getElementById('start').addEventListener('click', function () {
    const addValues = document.getElementById('addValues')

    arrValues.push(parseFloat(addValues.value))
    //console.log(arrValues)

    addValues.value = ''

    const p = document.getElementById('values')
    p.innerHTML = `<p id="values">Valores: ${arrValues}</p>`

})

document.getElementById('operation').addEventListener('click', function (ev) {
    ev.preventDefault()
    console.log(arrValues)
    const main = document.querySelector('input[name="main"]:checked').value
    console.log(main)

    switch (main) {
        case 'Média Aritmética Simples':
            Media_Aritmetica_Simples(arrValues)
            break;
        case 'Média Aritmética Ponderada':
            Media_Aritmetica_Ponderada(arrValues)
            break;
        case 'Mediana':
            Mediana(arrValues)
            break;
        case 'Moda':
            Moda(arrValues)
            break;
        default:
            alert('escolha uma opção válida')
            break;
    }
})
