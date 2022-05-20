function carregar() {
    var data = new Date()
    var hora = data.getHours()
    let txt = document.querySelector("div#txt")
    let img = document.querySelector("img#res")
    txt.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // dia
        img.src = 'fotomanha.png'
        document.body.style.background = 'green'
    } else if (hora > 12 && hora <= 18) {
        // tarde
        img.src = 'fototarde.png'
        document.body.style.background = 'orange'

    } else {
        // noite
        img.src = 'fotonoite.png'
        document.body.style.background = 'blue'
    } 
}