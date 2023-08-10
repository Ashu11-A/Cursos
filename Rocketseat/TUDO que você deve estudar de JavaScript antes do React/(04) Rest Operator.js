//-----------//-----------//-----------//-----------//-----------//

// Desestruturação + Rest

const user = {
    name: 'Matheus',
    idade: 17,
    address: {
        street: 'Inferno',
        number: 665
    }
}

const { name, idade, ...rest } = user

console.log(rest) // { address: { street: 'Inferno', number: 665 } }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, , third, ...rest2] = array

console.log({first, third}) // { first: 1, third: 3 }
console.log(rest2) // [4, 5, 6, 7, 8, 9, 10]
//-----------//-----------//-----------//-----------//-----------//