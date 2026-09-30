function tabuada(){
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

if(num.value.length == 0) {
alert('Digite o numero')
}else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c <= 12){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}
}

function um(){
var n = 1  
var c = document.getElementsByTagName('option')[0]

while(n <= 10){
    c.innerHTML = n++     
}
if(n = 10){
    c.innerHTML =' seu valor' 
}
}