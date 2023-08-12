const a = 0 // em uma operação lógica no JS, o 0 é considerado falso
const b = null
const c = "Teste" // true pq tem um conteúdo

console.log(a || b || c) // aqui vai aparecer o primeiro valor true

console.log(a ?? b ?? c) // caso seja null ou underfined, pula pro próximo (vai aparecer o primeiro que seja um valor)

let aa = 0

let bb = a || 42

console.log({ aa, bb })

bb = aa ?? 42

console.log({aa, bb})

let cc = false ?? 42  // aqui da pra ver bem que só não pode ser null ou underfined

console.log({cc})