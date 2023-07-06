/* Condições Alinhada
if (cond1) {
    [Bloco1]
} else {
    if (cond2) {
        [Bloco2]
    } else {
        [Bloco3]
    }
}
*/

var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log("Você não vota")
} else if (idade < 18 || idade >= 65) {
    console.log('Seu voto é Opcional')
} else {
    console.log('Seu voto é Obrigatorio')
}

var hora = new Date().getHours()
var minuto = new Date().getMinutes()
console.log(`\nAgora são exatamente ${hora}:${minuto}`)
if (hora <= 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}
/* Como o switch funciona -->
switch (expressão) {
    case valor1:
        break // obrigatorio
    case valor2:
        break // obrigatorio
    case valor3:
        break // obrigatorio
    default:
        break // obrigatorio   
}
*/

var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
}