function contar() {
    let início = document.getElementById('txtinc').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpas').value
    let res = document.getElementById('res')    
    if (início.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(início)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            window.alert('Passo invalido! Consideranto PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }   
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }  
}