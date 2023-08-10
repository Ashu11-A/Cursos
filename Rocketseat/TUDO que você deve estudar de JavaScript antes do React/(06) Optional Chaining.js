//-----------//-----------//-----------//-----------//-----------//

// Optional Chaining

const user = {
    name: 'Matheus',
    age: 17,
    address: {
        street: 'Inferno',
        number: 665,
        zip: {
            code: '9028732',
            city: 'Yare'
        },
        /*
        showFullAddress() {
            return 'ok'
        }
        */
    },
}

//console.log(user.address.street) // TypeError: Cannot read properties of undefined (reading 'street')
console.log(user.address ? user.address.street : 'Não existe') 
console.log(user?.address?.zip?.code ?? "Não Informado")
console.log(user.address.showFullAddress?.())

const key = 'street'

console.log(user.address?.[key]) // Não precisa de ?.

//-----------//-----------//-----------//-----------//-----------//