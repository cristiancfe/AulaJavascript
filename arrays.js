//var vingadores = new Array() // cria array vazio
var vingadores = ['thor', 'Homem Aranha', 'Homem de Ferro']
console.log(vingadores)
vingadores.push('Hulk') // push adiciona elemento ao array
console.log(vingadores)
    //vingadores.pop() // retira, apaga o último elemento do array
    //console.log(vingadores)
    //vingadores.shift() // remove o primeiro item do array
    //console.log(vingadores)

// para remover um item do array em específico se deve descobrir seu índice
var indice = vingadores.indexOf('Homem de Ferro')
console.log(indice) // no lugar do parâmetro "indice" dentro dos parênteses, ao colocar o número da posição ele apaga a partir desta posição todos os outros elementos
    //esta na posição 1 para remover se usa a expressão sprice, se não for informado nada ele apaga tudo
    // vingadores.sprice(indice) ele remove todos os elementos após o parâmetro informado
    // console.log(vingadores)
    //usando comando concat se consegue concatenar dois arrays -  var novo array = array.concat(array2)