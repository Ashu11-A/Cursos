//-----------//-----------//-----------//-----------//-----------//
// Promises

const somaDoisNumeros = (a + b); {
    return new Promise((resolve, reject) => {
        reject(a + b)
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

console.log(somaDoisNumeros(2 + 7)
    .then(soma => {
        console.log(soma) // 9
    })
    .cacth(err => {
        console.log(err)
    })
)

fetch('https//api.github.com/users/ashu11-a')
    .then(res => {
        /*
        res.json().then(body => {
            console.log(body)
        })
         */
        return res.json()
    })
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log('A requisição foi concluido com sucesso.')
    })

async function buscaDados(url) {
    try {
        const res = await fetch(url)
        const { body } = res.json()
        return body
    } catch (err) {
        console.log(err)
    } finally {
        console.log('deu')
    }
}
const { name } = await buscaDados('https://api.github.com/users/ashu11-a')
//-----------//-----------//-----------//-----------//-----------//