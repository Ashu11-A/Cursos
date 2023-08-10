//-----------//-----------//-----------//-----------//-----------//

// Objetos

const user = {
    name: 'Matheus',
    idade: 17,
    address: {
        street: 'Inferno',
        number: 665
    }
}

console.log('name' in user) // true
console.log(Object.keys(user)) // [ 'name', 'idade', 'address' ]
console.log(Object.values(user)) // [ 'Matheus', 17, { street: 'Inferno', number: 665 } ]
console.log(JSON.stringify(Object.values(user))) // Ideal para Web
console.log(Object.entries(user)) 
/*
[
    [ 'name', 'Matheus' ],
    [ 'idade', 17 ],
    [ 'address', { street: 'Inferno', number: 665 } ]
]
*/

//-----------//-----------//-----------//-----------//-----------//