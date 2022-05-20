function contar() {
    var ini = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var pas = document.getElementById('txtp').value
    var res = document.getElementById('res')
    if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(pas)
        if (p == 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Crescente
            for (var c = i; c <= f; c += p) {          
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f) {
            // Decrescente
            for (var c = i; c >= f; c -= p) {          
                res.innerHTML += `${c} \u{1F449} `
            }
        }   
        res.innerHTML += `\u{1F3C1}`
    }
}





/*
var c = i
while (c <= f) {
    c = c + p
}
*/