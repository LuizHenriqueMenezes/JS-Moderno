const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

// console.log(user.friends[0].phone.ddd) ----> aqui vai dar erro, pq phone.ddd não existe dentro do friends
console.log(user.friends[0].phone?.ddd) // aqui está falando o seguinte: se o phone for null (não existir) ele para
console.log(user?.brothers?.length) // se chama encadeamento opicional pq ele faz o encadeamento caso exista a propriedade

console.log(user.brothers?.[5].name) 
// o que acontece: sem o "?." estava dando erro, por causa da posição [5]
// ent, colocamos ? antes, e pra continuar vai o .