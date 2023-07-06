/*
if (condição) {

} // Condição Simples

if (condição) {
    true
} else {
    false
} // Condição Composta
*/

var velocidade = 60
if (velocidade > 60) { // Condição composta
    console.log('Você Ultrapassou o Limite de Velocidade da Via')
} else {
    console.log(`A velocidade do seu veiculo está em ${velocidade}Km/h`)
}
console.log('Dirija sempre usando sinto de segurança!')

var pais = 'EUA'
console.log(`\nVivendo em: ${pais}`)
if (pais != 'BR') {
    console.log('Você é Brasileiro')
} else {
    console.log('Você é Estrangeiro')
}