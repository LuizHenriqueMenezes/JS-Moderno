const a = 1, b = 2

const plus = (a, b) => {
   return a + b 
}

const double = n => n * 2

console.log(`A soma de ${a} + ${b} é: ${plus(a, b)}
E o dobro de ${b} é ${double(b)}`)

// caso de uso 

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)