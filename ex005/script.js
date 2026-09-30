function carregar(){
var corpo = window.document.getElementsByTagName('body')[0]
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minu = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minu}`
if(hora >= 0 && hora < 12){
    //Bom dia
  img.src = '1.png' 
  corpo.style.backgroundColor = '#d04306'  
}else if(hora >= 12 && hora < 18){
     //Boa Tarde
    img.src = '2.png'
    corpo.style.backgroundColor = '#018e47'
}else{
   img.src = '3.png'
   corpo.style.backgroundColor = '#0040ff'
}
}