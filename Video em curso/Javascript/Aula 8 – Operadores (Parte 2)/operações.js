console.log(
    "Operadores Relacionais:",
    "\n> (Maior que)",
    "\n< (Menor que)",
    "\n>= (Maior ou igual)",
    "\n<= (Menor ou igual)",
    "\n== (Igual a)",
    "\n!= (Diferente de)"
)

console.log(
    '\n5 é maior que 2? ' + (5 > 2),
    '\n7 é menor que 4? ' + (7 < 4),
    '\n8 é igual ou maior que 8? ' + (8 >= 8),
    '\n9 é igual ou menor que 7? ' + (9 <= 7),
    '\n5 é igual a 5? ' + (5 == 5),
    '\n4 é diferente de 4? ' + (4 != 4)
)

var a = 8
var b = 15
console.log(
    "\na é menor que b? " + (a < b),
    "\na é maior que b? " + (a > b),
    "\na igual ou menor que b - 10? " + (a <= b - 10)
)
var preço = 0
var idade = 17
var curso = 'JavaScript'
var n1 = 10
var n2 = 5
console.log(
    '\nO preço é maior ou igual a 200.50? ' + (preço >= 200.50),
    '\nIdade é menor que 18? ' + (idade < 18),
    '\ncurso é igual a JavaScript ' + (curso == 'JavaScript'),
    '\nn1 é diferente de n2? ' + (n1 != n2)
)

console.log(
    '\n\nIdentidade:',
    '\n(Number) 5 == 5? ' + (5 == 5),
    '\n(Number) 5 === 5? ' + (5 === 5),
    "\n(String) 5 == '5'? " + (5 == '5'),
    "\n(String) 5 === '5' " + (5 === '5'), // === significa Identicos
    "\n(String) 5 != '5'? " + (5 != '5'),
    "\n(String) 5 !== '5'? " + (5 !== '5'), // !== significa Desilgual Restrito
)

console.log(
    '\n\nOperadores Lógicos:',
    '\n! (Negação)',
    '\n&& (E/conjução)',
    '\n|| (Ou/disjunção)'
)

console.log(
    "\n\n(!) Negação:",
    "\n(true) -> false",
    "\n(false) -> true"
)

console.log(
    "\n\n(&&) E/Conjunção",
    "\n(true && true) -> true",
    "\n(true && false) -> false",
    "\n(false && true) -> false",
    "\n(false && false) -> false"
)

console.log(
    "\n\n(||) Ou/Disjunção",
    "\n(true || true) -> true",
    "\n(true ||false) -> true",
    "\n(false || true) -> true",
    "\n(false || false) -> false"
)

console.log(
    "\n\na = 5 \nb = 8\n(a > b) -> false && true <- (b % == 0): " + (a > b && b % 2 == 0),
    "\n(a <= b) -> true || false <- (b / 2 == 2): " + (a <= b || b / 2 == 2)
)

var idade = 17
var estado = 'MT'
var salário = 5000
var sexo = 'M'

console.log(
    '\n\nIdade está entre 15 e 17? ' + (idade >= 15 && idade <= 17),
    '\nEstado é (Mato Grosso) ou (São Paulo)? ' + (estado == 'MT' || estado == 'SP'),
    '\nO salário é acima de 1500 e não é um homem? ' + (salário > 1500 && sexo != 'M')
)

console.log(
    "\n\nPrecedencia",
    "\n() ** / [...]",
    "\n> < >= [...]",
    "\n!",
    "\n&&",
    "\n||"
)

console.log(
    '\n\nTernário:',
    '\n?',
    '\n:',
    '\nteste ? true : false',
)

var Média = 4.5
console.log(
    '\n\nExemplo:',
    "\nMédia: " + Média,
    '\nMédia >= 7.0 ? "Aprovado" : "Reprovado",\nResultado: ' + (Média >= 7.0 ? "Aprovado" : "Reprovado")
)
var Média = 8
console.log(
    "\nMédia: " + Média,
    '\nMédia >= 7.0 ? "Aprovado" : "Reprovado",\nResultado: ' + (Média >= 7.0 ? "Aprovado" : "Reprovado")
)

var res = Média % 2 == 0 ? 5 : 9

console.log(
    "\n\nMédia: " + Média,
    "\nMédia % 2 == 0 ? 5 : 9\nResultado: " + (Média % 2 == 0 ? 5 : 9),
    "\n\nIdade: " + idade,
    "\nidade >= 18 ? 'Maior de Idade' : 'Menor de Idade'\nResultado: "  + (idade >= 18 ? 'Maior de Idade' : 'Menor de Idade')
)