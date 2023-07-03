console.log(
    '(-) Subtração: ' + (10 - 2),
    '\n(+) Adição: ' + (10 + 2),
    '\n(*) Multiplicação: ' + (10 * 2),
    '\n(/) Divisão: ' + (10 / 2),
    '\n(%) Resto da divisão: ' + (9 % 2),
    '\n(**) Elevado: ' + (10 ** 2),
)

console.log(
    '\n\nSem parenteses: ' + (5 + 3 / 2), // 6.5 (A soma aqui deveria ter dado 4, mas a divição sempre vem primeiro)
    '\nCom parenteses: ' + (5 + 3) / 2 // 4
)

console.log(
    "\n\nOrdem de Precedência:",
    "\n()",
    "\n**",
    "\n* / %",
    "\n+ -\n"
)

//console.log(
//    "Erro sintatico:" + (10 + / 2)
//)

var a = 5 + 3 // 8
console.log(a)
var b = a % 5 // 3
console.log(b)
var c = 5 * b ** 2 // 45
console.log(c)
var d = 10 - a / 2 // 6
console.log(d)
var e = 6 * 2 / d // 2
console.log(e)
var f = b % e + 4 / e // 3
console.log(f)

var n = 3 // Atribuição simples
n += 5 // 8
n /= 2 // 4
n *= 5 // 20
n -= 5 // 15
n **= 2 // 225
n %= 2 // 1
console.log('\n' + n + '\n')

var x = 5
x++ // (pós incremento) x = x + 1
console.log(x)
--x // (pre incremento) x = x - 1
console.log(x)