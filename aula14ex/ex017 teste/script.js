function gerar() {
    let num = document.getElementById('txtn').value
    let tab = document.getElementById('tab')
    if (num.length == 0) {
        window.alert('Precha os dados corretamente!')
    } else {
        tab.innerHTML = ''
        let n = Number(num)
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}