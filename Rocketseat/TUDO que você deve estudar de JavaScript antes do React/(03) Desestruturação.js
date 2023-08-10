//-----------//-----------//-----------//-----------//-----------//

// Desestruturação

const user = {
    name: 'Matheus',
    idade: 17,
    address: {
        street: 'Inferno',
        number: 665
    }
}


const { address, idade: age, nickname = 'Ashu' 
/* Caso não exista a variavel nickname, ele ira me retornar Ashu */
} = user 
// const address = user.address

console.log({address, age, nickname})

/*
function mostraIdade(user) {
    return user.idade
}
*/

function mostraIdade({ idade }) {
    return idade
}

console.log(mostraIdade(user)) // 17

//-----------//-----------//-----------//-----------//-----------//
