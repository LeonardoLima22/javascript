function gerar() {
    let num = document.getElementById('txtnum').value
    let tab = document.getElementById('seltab')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
    let n = Number(num)
    let c = 1
    tab.innerHTML = '' //usado para uma tabuada não ficar embaixo da anterior
    while (c <= 10) {
        let item = document.createElement('option') //criei um <ption>
        item.text = `${n} X ${c} = ${n*c}` // escreve dentro do <option>
        item.value = `tab${c}` //isso vai serivr para outras linguagem como php
        tab.appendChild(item) // coloquei o <option> como child de tab. ou seja coloquei um <option> dentro da tag <select>
        c++
    }
    }  
}
