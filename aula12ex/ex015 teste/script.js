function mudar() {
    let gen = document.getElementsByName('gen')
    if (gen[0].checked) {
        document.body.style.background = 'rgb(67, 177, 240)'
    } else if (gen[1].checked) {
        document.body.style.background = 'rgb(226, 89, 89)'
    }
}
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let txtano = document.getElementById('txtn').value
    let res = document.getElementById('res')

    if (txtano.length == 0 || txtano > ano) {
        window.alert('[ERRO] Preencha os dados corretamente!')
    } else {
        let gen = document.getElementsByName('gen')
        genero = ''
        let idade = ano - txtano
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (gen[0].checked) {
            // Homem
            genero = 'Homem'
            if (idade >=0 && idade <= 10) {
                img.src = 'foto-bebe-m.png'
            } else if (idade > 10 && idade <= 18) {
                img.src = 'foto-jovem-m.png'
            } else if (idade > 18 && idade < 50) {
                img.src = 'foto-adulto-m.png'
            } else {
                img.src = 'foto-idoso-m.png'
            }

        } else if (gen[1].checked) {
            // Mulher
            genero = 'Mulher'
            if (idade >=0 && idade <= 10) {
                img.src = 'foto-bebe-f.png'
            } else if (idade > 10 && idade <= 18) {
                img.src = 'foto-jovem-f.png'
            } else if (idade > 18 && idade < 50) {
                img.src = 'foto-adulto-f.png'
            } else {
                img.src = 'foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}