function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var img = document.getElementById('img')
    var res = document.getElementById('res')
    res.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora <= 12) {
        document.body.style.background = 'green'
        img.src = 'fotomanha.png'
    } else if (hora > 12 && hora <= 18) {
        document.body.style.background = 'orange'
        img.src = 'fototarde.png'
    } else {
        document.body.style.background = 'blue'
        img.src = 'fotonoite.png'
    }
}