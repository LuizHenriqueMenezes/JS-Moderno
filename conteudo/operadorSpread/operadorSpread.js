const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno') // aqui vai mudar o array original por ser referência 

console.log({ towns, townsCopy })

const townsClone = [...towns] // aqui se cria um novo array

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

// maneiras de usar no objeto
const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test' // aqui vai adicionar ao final sem problemas 

console.log({ townsObj, townsObjClone })