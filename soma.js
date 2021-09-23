//DOM Document Object Model representa as marcações  HTML
function somaValores() {
    var result = 0
    var n1 = document.getElementById('number').value
    var n2 = document.getElementById('number2').value

    var result = parseInt(n1) + parseInt(n2)

    var divResultado = document.getElementById('resultado')

    divResultado.append('O resulado da soma é : ' + result)
    console.log(result)
}
// senão for colocado parseInt ele entende como String e concatena os valores ao invés de somar