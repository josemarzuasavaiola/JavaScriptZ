function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = `🙁 Sem todos os dados`
    }else{
        resultado.innerHTML = 'contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
        for (let c = i ; c <= f ; c += p) {
           resultado.innerHTML += `👉 ${c} `   
        }
    }else{
         for (let c = i ; c >= f ; c -= p) {
           resultado.innerHTML += `👉 ${c} `
        }
}
}
}