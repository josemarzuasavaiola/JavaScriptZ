
var nome = window.prompt('A quem tenho o prazer de apresentar o site?')
window.alert(`Muito feliz em recebelo aqui ${nome}, tenha uma boa visita.`)
var img = document.getElementsByTagName('img')[0]
var txt = document.getElementsByTagName('h1')[0]
var txt2 = document.getElementsByTagName('p')[0]
var tempo = document.getElementsByTagName('article')[0]
var data = new Date
var minuto = data.getMinutes()
var hora = data.getHours()
var dia = data.getUTCDate()
var mes = data.getMonth()
var ano = data.getFullYear()
txt2.innerHTML = nome + ',' + txt2.innerHTML

tempo.innerHTML = `Site acessado em: ${dia}/${mes}/${ano}`

/*Cores dos botões*/
var cor1 = document.getElementsByTagName('section')[1]
cor1.style.backgroundColor = '#589108'

var cor2 = document.getElementsByTagName('section')[2]
cor2.style.backgroundColor = '#08916f'

var cor3 = document.getElementsByTagName('section')[3]
cor3.style.backgroundColor = '#089186'

var cor4 = document.getElementsByTagName('section')[4]
cor4.style.backgroundColor = '#067545'

var cor5 = document.getElementsByTagName('section')[5]
cor5.style.backgroundColor = '#819108'
/*
function notificacao(){
   if(apelo1.style.display == 'block'){

    apelo1.style.display = 'none'
   }else{
    apelo1.style.display = 'block'
   }
}
*/
function proximo(){
cor1.style.backgroundColor = 'white'
img.src = 'marginal.jpg'
txt.innerHTML = 'Marginal de Luanda'
txt2.innerHTML = `${nome}, à beira da Baía de Luanda, encontra-se um dos lugares mais emblemáticos da capital angolana: a Marginal de Luanda.

Com uma vista privilegiada para o mar, a Marginal é um espaço onde a beleza natural se encontra com a arquitetura e a vida urbana da cidade. Ao longo da sua extensão, é possível observar edifícios modernos, jardins, monumentos e o movimento constante de Luanda.`
}

function anterior(){
   cor2.style.backgroundColor = 'white'
   img.src = 'miradouro.jpg'
   txt.innerHTML = 'Miradouro da Lua'  
   txt2.innerHTML = `${nome}, o local é formado por enormes falésias e formações rochosas esculpidas ao longo do tempo pela ação da água e do vento. As suas formas e cores fazem lembrar a superfície da Lua, dando origem ao seu nome.

     Com vista para o Oceano Atlântico, especialmente ao pôr do sol, o Miradouro da Lua oferece uma paisagem única e tornou-se um dos lugares turísticos mais conhecidos de Angola.`  
}

function seguinte(){
    cor3.style.backgroundColor = 'white'
    img.src = 'Sera.jpg'
    txt.innerHTML = 'Serra da Leba'
    txt2.innerHTML = `${nome}, localizada na província da Huíla, a Serra da Leba é uma das paisagens mais famosas e impressionantes de Angola.

     O seu grande destaque é a estrada sinuosa que atravessa as montanhas, cercada por enormes formações rochosas e uma paisagem natural deslumbrante.

     Do alto da serra, é possível apreciar uma vista magnífica sobre as montanhas e os vales da região.`
}
function sucessor(){
    cor4.style.backgroundColor = 'white'
    img.src = 'fenda.jpg'
    txt.innerHTML = 'Fenda da Tundavala'
    txt2.innerHTML = `${nome}, localizada na província da Huíla, a Fenda da Tundavala é uma das paisagens naturais mais impressionantes de Angola.

Trata-se de uma enorme escarpa situada no alto da Serra da Chela, de onde se pode contemplar uma vista panorâmica espetacular sobre os vales e as paisagens da região.

Com as suas montanhas imponentes e um cenário de grande beleza natural, a Tundavala tornou-se um dos principais pontos turísticos do sul de Angola`
}
function antecessor(){
    cor5.style.backgroundColor = 'white'
    img.src = 'kalandula.jpg'
    txt.innerHTML = 'As Quedas de Kalandula'
    txt2.innerHTML = `${nome}, localizadas na província de Malanje, as Quedas de Kalandula estão entre as paisagens naturais mais impressionantes de Angola.

     Com uma enorme queda de água cercada por vegetação e formações rochosas, o local oferece um cenário de grande beleza, especialmente durante a época das chuvas, quando o volume de água aumenta.

     As Quedas de Kalandula são um dos principais cartões-postais de Angola e representam a força e a beleza da natureza angolana.`
}
function pai(){
 cor1.style.backgroundColor = '#589108'

 cor2.style.backgroundColor = '#08916f'

 cor3.style.backgroundColor = '#089186'

 cor4.style.backgroundColor = '#067545'

 cor5.style.backgroundColor = '#819108'

 img.src = 'destinos.jpg'
 txt.innerHTML = `Angola ${hora}h:${minuto}min`
 txt2.innerHTML = ` ${nome},<strong>Angola</strong> é uma país cheio de encantos e recantos, então selecionei aqui alguns lugares e paisagens belas que caracterizam <strong>Angola</strong> no que o túrismo diz respeito.`
}