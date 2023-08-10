//-----------//-----------//-----------//-----------//-----------//

// || tem efeito nesses tipos de informação: (0, '', [], false, undefined, null)
// ?? tem efeito somente para: (null, undefined)
// logo então:

const idade = '0'

console.log(idade || 'Não informado') // retorna: Não informado

console.log(idade ?? 'Não informado') // retorna: 0

//-----------//-----------//-----------//-----------//-----------//
