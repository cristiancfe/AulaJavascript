// if usado para tomada de decisão se(If)o valor for igual a 18
// var idade = 18
// if (idade >= 18) {
//     console.log('você já pode tirar a carteira de habilitação')
// }

// votação
// var idade = 18
// if (idade >= 18 && idade < 65) {
//     console.log('Voto obrigatório')
// } else if (idade >= 16 && idade < 18) {
//     console.log('voto opcional')
// } else if (idade < 16) {
//     console.log('Não pode votar ')
// } else {
//     console.log('Voto não é obrigatório')
// }

// estrutura de seleção usando switch case

// var ingresso = 'premium'
// switch (ingresso) {
//     case 'vip':
//         console.log('você ficará no camarote')
//         break
//     case 'premium':
//         console.log('você ficará na Pista')
//         break
//     case 'comum':
//         console.log('você ficará na arquibancada')
//         break
//     default:
//         console.log('Tipo de ingresso inválido')
//         break
// }

// laços de repetição com while ,For e foreach

//criando um loop infinito com while
// while (true) {
//     console.log('Sou lindo!')
// }
// criando laço while, ele executa enquanto for verdadeira
// var i = 0
// while (i <= 10) {
//     console.log('repetindo porque  ' + i + ' é menor ou igual a 10 ')
//     i++
// }

//se não colocar i++ também entra em loop infinito
// for (var a = 0; a < 10; a++) {
//     console.log('Repetindo porque ' + a + ' é menor que 10')
// }
// pode se usar ${a} para concatenar a variável mas eu prefiro  + a +

// var vingadores = ['IronMan', 'Thor', 'SpiderMan']
// vingadores.forEach(function(value, key) {
//     console.log(value + ' na posição ' + key)
// })