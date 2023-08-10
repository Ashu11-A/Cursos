//-----------//-----------//-----------//-----------//-----------//
//--  Map, Filter, Every, Some, Find, Reduce  --//
const array = [1, 2, 3, 4, 5, 6, 7, 8]

const filterAndMap = array
    .filter(item => item % 2 === 0 ) // 2, 4, 6, 8
    .map(item => item * 10) // 20, 40, 60, 80

console.log(filterAndMap)

const todosOsItensSãoNumeros = array.every(item => typeof item === 'number') // Retorna True se todos os itens são numeros

console.log(todosOsItensSãoNumeros) // true


const peloMenosUmNumero = array.some(item => { 
    /* 
     * Some verifica se pelo menos algo daquele array é algum tipo de informação
     * Diferente de every, onde todos tem que ser de algum tipo
     */
    return typeof item !== 'number'
})
console,log(peloMenosUmNumero) // false

const encontre = array.find(item => {
    return item % 2 === 0 // ele somente encontra o primeiro item que satisfaça essa condição
})

console.log(encontre) // 2

const ondeEsta = array.findIndex(item => item % 2 === 0) // procura o numero par que está mais proximo
/* retorna apenas a localização do item no array, 
 *  0  1  2  3  4  5  6  7
 * [1, 2, 3, 4, 5, 6, 7, 8]
 */
console.log(ondeEsta) // 1

const calcule = array.reduce((acc, item) => {
    return acc + item
}, 0)

console.log(calcule) // retorna a soma de todos os itens do array


//-----------//-----------//-----------//-----------//-----------//