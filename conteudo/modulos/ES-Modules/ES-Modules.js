import {label, input, br, nameConst} from "./functions.js" //precisa por o .js pra usar no html

console.log(label({ for: 'fullname', textContent: 'Nome Completo' }))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }))
console.log(br())