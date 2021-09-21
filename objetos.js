var album = {
    titulo: 'Black album',
    lançamento: 1991,
    showInfo: function() {
        console.log(
            'Título do album: ' + this.titulo + ' - lançado em: ' + this.lançamento
        )
    }
}

album.showInfo() // chma aa função dentro do objetp
console.log(album.titulo) //chama o titulo do album
console.log(album.lançamento) // chama o ano de lançamento do album