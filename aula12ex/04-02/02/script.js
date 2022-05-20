function confirmar() {
    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    if (txtano.value.length == 0 || txtano.value > ano) {
        window.alert('ERRO! Preencha os dados corretamente.')
    } else {
        var idade = ano - txtano.value
        var gen = document.getElementsByName('gen')
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')

    } if (gen[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 10) {
            // criança
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade > 10 && idade <= 18) {
            // jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade > 18 && idade < 50) {
            // adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            // idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }

    } else if (gen[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10) {
            // criança
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade > 10 && idade <= 18) {
            // jovem
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade > 18 && idade < 50) {
            // adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            // idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    res.innerHTML = `Você é ${genero} com ${idade} anos.`
    res.appendChild(img)
    res.style.textAlign = 'center'
} 