/*
function comerPizza() {
    while (temFatia()) {
        comerFatia()
    }
}

while (contador) { // Estrutura de Repetição com um teste no inicio
}

do { // Estrutura de Repetição com um teste no final
} while (contador)

*/

var contador = 1

while (contador <= 20) {
    console.log('Passo ' + contador)
    contador++
}

do {
    console.log('Passo ' + contador)
    contador++
} while (contador <= 20)