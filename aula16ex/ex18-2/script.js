var num = document.querySelector('input#txtn')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNumero(n) { // o valor de (num.value) de isNumero na função acima vai parar em (n)
    if (Number(n) >= 1 && Number(n) <= 100) { 
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // l puxa o valor do array "valores"
    if (l.indexOf(Number(n)) != -1) { // indexOf busca no array se existe (n) dentro dele, se não existir ele retorna -1 ou seja false
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adcione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos = 0; pos<valores.length; pos++) {
            soma = soma + valores[pos] // fazendo a soma
            if (valores[pos] > maior) {
                maior = valores[pos] // contando o maior
            }
            if (valores[pos] < menor) {
                menor = valores[pos] // contando o menor
            }
        }
        media = soma / total // fazendo a média
        
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}