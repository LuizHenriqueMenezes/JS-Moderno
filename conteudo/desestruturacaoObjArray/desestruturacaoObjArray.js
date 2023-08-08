const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const { job } = person

//tbm é possível criar vários de uma vez

const { name, parents } = person

console.log(job)
console.log(name, parents)

// pro array é só mudar de {} pra []
// e ja que não tem nome nos arrays, trabalhamos com ordem:
const [father, mother] = parents
console.log(father, mother)

function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    // floor => arredonda o numero smp pra baixo (10.7 -> 10)
    // random da um numero aleatório entre 0 e 1
    // multiplicando por 9999 gera um numero entre 0 e 9999 (só o numero inteiro, ja que arredonda)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke)
