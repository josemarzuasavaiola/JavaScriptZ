 var nome =window.prompt('Qual é o seu nome ')
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anonasce = document.getElementById('txtano')
    var idade = ano - Number(anonasce.value)
    var fsex = document.getElementsByName('radiosex')
    var msg1 = document.getElementsByTagName('div')[1]
    var img = document.getElementById('imagem')
   

    if(anonasce.value.length == 0 || Number(anonasce.value) > ano )
        alert('[ERROR] Verifique o ano de nascimento.')
    genero = ''
    if(fsex[0].checked){
        genero = 'Homem'
    }  
    if(fsex[1].checked){
          genero = 'Mulher'
    }
    if (idade <= 15 && genero == 'Homem'){
          img.src = '4.jpg'
        msg1.innerHTML = `${nome}, você é um ${genero} criança de ${idade} anos` 

    }else if(idade > 15 && idade <= 18){ 
        img.src = '4.png'
        msg1.innerHTML = `${nome}, você é um ${genero} adolescente de ${idade} anos`
    }else if(idade > 18 && idade <= 40){
        img.src = '6.jpg'
        msg1.innerHTML = `${nome}, você é um ${genero} jovem adulto de ${idade} anos`
    }else if(idade > 40 && idade <= 60){
        img.src = '7.png'
        msg1.innerHTML = `${nome}, você é um ${genero} senhor adulto de ${idade} anos`
    }else if(idade > 60) 
        img.src = '8.png'  
    if (idade == 14 && genero == 'Mulher'){
          img.src = '1.jpg'
        msg1.innerHTML = `${nome}, você é uma ${genero} criança de ${idade} anos` 

    }else if(idade == 11 && idade <= 18 && genero == 'Mulher'){ 
        img.src = '2.jpg'
        msg1.innerHTML = `${nome}, você é uma ${genero} adolescente de ${idade} anos`
    }else if(idade > 18 && idade <= 40){
        img.src = '3.jpg'
        msg1.innerHTML = `${nome}, você é uma ${genero} jovem adulta de ${idade} anos`
    }else if(idade > 40 && idade <= 60){
        img.src = '4.jpeg'
        msg1.innerHTML = `${nome}, você é uma ${genero} senhor adulta de ${idade} anos`
    }else if(idade > 60) 
        img.src = 'jpeg.png'   
    img.style.textAlign = 'center'
    msg1.style.margin= 'auto'
    msg1.appendChild(img)
}
    function clicou(){
    var confirma = window.prompt('Ainda e a mesma pessoa?')
    if (confirma == 'Sim' || confirma == 'sim'){
    var mesmonome = nome
    }else if (confirma == 'Não' || confirma == 'não')
    var novonome = window.prompt('Quem e você?')
      var data = new Date()
    var ano = data.getFullYear()
    var anonasce = document.getElementById('txtano')
    var idade = ano - Number(anonasce.value)
    var fsex = document.getElementsByName('radiosex')
    var msg1 = document.getElementsByTagName('div')[1]
    var img = document.getElementById('imagem')
   

    if(anonasce.value.length == 0 || Number(anonasce.value) > ano )
        alert('[ERROR] Verifique o ano de nascimento.')
    genero = ''
    if(fsex[0].checked){
        genero = 'Homem'
    }  
    if(fsex[1].checked){
          genero = 'Mulher'
    }
    if (idade <= 15 && genero == 'Homem'){
          img.src = '4.png'
        msg1.innerHTML = `${novonome}, você é um ${genero} criança de ${idade} anos` 

    }else if(idade > 15 && idade <= 18){ 
        img.src = '5.png'
        msg1.innerHTML = `${novonome}, você é um ${genero} adolescente de ${idade} anos`
    }else if(idade > 18 && idade <= 40){
        img.src = '6.jpg'
        msg1.innerHTML = `${novonome}, você é um ${genero} jovem adulto de ${idade} anos`
    }else if(idade > 40 && idade <= 60){
        img.src = '7.png'
        msg1.innerHTML = `${novonome}, você é um ${genero} senhor adulto de ${idade} anos`
    }else if(idade > 60) 
        img.src = '8.png'  
    if (idade <= 15 && genero == 'Mulher'){
          img.src = '1.jpg'
        msg1.innerHTML = `${novonome}, você é uma ${genero} criança de ${idade} anos` 

    }else if(idade > 15 && idade <= 18 && genero == 'Mulher'){ 
        img.src = '2.jpeg'
        msg1.innerHTML = `${novonome}, você é uma ${genero} adolescente de ${idade} anos`
    }else if(idade > 18 && idade <= 40){
        img.src = '3.jpg'
        msg1.innerHTML = `${novonome}, você é uma ${genero} jovem adulta de ${idade} anos`
    }else if(idade > 40 && idade <= 60){
        img.src = '4.jpeg'
        msg1.innerHTML = `${novonome}, você é uma ${genero} senhor adulta de ${idade} anos`
    }else if(idade > 60) 
        img.src = 'jpeg.png'   
    img.style.textAlign = 'center'
    msg1.style.margin= 'auto'
    msg1.appendChild(img)
}

