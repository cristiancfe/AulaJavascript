// var album = {
//     titulo: 'Black album',
//     lançamento: 1991,
//     showInfo: function() {
//         console.log(
//             'Título do album: ' + this.titulo + ' - lançado em: ' + this.lançamento
//         )
//     }
// }

// outra maneira de declarar o objeto com suas propriedades
var album = new Object()

album.titulo = 'black album'
album.lançamento = 1991

//album.showInfo() // chama a função dentro do objeto
console.log(album.titulo) //chama o titulo do album
console.log(album.lançamento) // chama o ano de lançamento do album

album.track = ['musica1', 'musica2', 'musica3']
console.log(album.track)