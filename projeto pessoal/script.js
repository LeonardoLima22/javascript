function confirmar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var agoravai = document.getElementById('agoravai')
    if (txtano.value.length == 0 || txtano.value > ano) {
        window.alert('ERRO! Preencha os dados corretamente.')
    } else {
        var idade = ano - txtano.value
        var sex = document.getElementsByName('sex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                res.innerHTML = `<strong>Pokemon</strong>`
                img.setAttribute('src', 'pokemon.png')
            } else if (idade > 5 && idade <= 12) {
                res.innerHTML = `<strong>Dragon Ball</strong>`
                img.setAttribute('src', 'dragonball.png')
            } else if (idade > 12 && idade <= 15) {
                res.innerHTML = `<strong>Naruto</strong>`
                img.setAttribute('src', 'naruto.png')
            } else if (idade > 15 && idade <= 18) {
                res.innerHTML = `<strong>Death Note</strong>`
                img.setAttribute('src', 'deathnote.png')
            } else if (idade > 18 && idade <= 25) {
                res.innerHTML = `<strong>Shingeki No Kyojin</strong>`
                img.setAttribute('src', 'shingeki.png')
            } else if (idade > 25 && idade <= 30) {
                res.innerHTML = `<strong>Cowboy Bebop</strong>`
                img.setAttribute('src', 'cowboy.png')
            } else if (idade > 30 && idade <= 40) {
                res.innerHTML = `<strong>Neon Genesis Evangelion</strong>`
                img.setAttribute('src', 'evangelion.png')
            } else {
                res.innerHTML = `<strong>Akira</strong>`
                img.setAttribute('src', 'akira.png')
            }
        
        
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                res.innerHTML = `<strong>Meu Amigo Totoro</strong>`
                img.setAttribute('src', 'totoro.png')
            } else if (idade > 5 && idade <= 12) {
                res.innerHTML = `<strong>A Viagem de Chihiro</strong>`
                img.setAttribute('src', 'chihiro.png')
            } else if (idade > 12 && idade <= 15) {
                res.innerHTML = `<strong>Sailor Moon</strong>`
                img.setAttribute('src', 'sailormoon.png')
            } else if (idade > 15 && idade <= 18) {
                res.innerHTML = `<strong>Kaguya-Sama</strong>`
                img.setAttribute('src', 'kaguya.png')
            } else if (idade > 18 && idade <= 25) {
                res.innerHTML = `<strong>Kimi No Na Wa</strong>`
                img.setAttribute('src', 'kiminonawa.png')
            } else if (idade > 25 && idade <= 30) {
                res.innerHTML = `<strong>Shigatsu Wa Kimi No Uso</strong>`
                img.setAttribute('src', 'shigatsu.png')
            } else if (idade > 30 && idade <= 40) {
                res.innerHTML = `<strong>Violet Evergarden</strong>`
                img.setAttribute('src', 'violet.png')
            } else {
                res.innerHTML = `<strong>Koe No Katachi</strong>`
                img.setAttribute('src', 'koenokatachi.png')
            }
        }
        res.style.textAlign = 'center'
        agoravai.innerHTML = ``
        agoravai.appendChild(img)
        
    }
    
}