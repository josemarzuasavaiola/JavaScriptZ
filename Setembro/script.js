        var pontuacao = document.getElementById('pontua')
        var texinicial = document.getElementById('texto1')
        var botao1 = document.getElementsByTagName('input')[0]
        var nome = window.prompt('Como é o seu nome?')
        function clicoubotao(){
          texinicial.innerHTML = `Sente- se bem, ${nome}?`
          if(botao.style.display == 'none' && botao2.style.display == 'block' && botao3.style.display == 'block'){
            botao.style.display = 'block'
            botao2.style.display ='none'
            botao3.style.display = 'none'
          }else{
            botao.style.display = 'none'
            botao2.style.display = 'block'
            botao3.style.display = 'block'
          }
          pontuacao.style.display = 'none'
          pontuacao.innerHTML = 'Pontuação: 0/10'
    }
    function estoubem(){
        texinicial.innerHTML = `Então podemos começar o Quiz, ${nome}?`
        if(botao2.style.display == 'block' && botao3.style.display == 'block'){
            botao2.style.display = 'none'
            botao3.style.display = 'none'
            segbotao2.style.display ='block' 
            segbotao3.style.display = 'block'
        }
    }
    function naoestoubem(){
        texinicial.innerHTML = `O que foi ${nome}, tu podes falar com os teus amigos ou a tua família, não passes por isso só`
        botao2.style.display = 'none' 
        botao3.style.display = 'none' 
        regresso.style.display = 'block'
    }
    function aceito(){
        texinicial.innerHTML = `1. ${nome}, o que fazer quando uma pessoa está sofrendo?`
        if(segbotao2.style.display == 'block' && segbotao3.style.display == 'block'){
            segbotao2.style.display = 'none' 
            segbotao3.style.display = 'none' 
            pergunta.style.display = 'block' 
            pergunta2.style.display = 'block'
            pergunta3.style.display = 'block'
        }
        pontuacao.style.display = 'block'
        pontuacao.innerHTML = 'Pontuação: 0/10'
    }
    function naoaceito(){
        texinicial.innerHTML = `X__X <p>Que pena ${nome}, você desistiu</p>`
        segbotao2.style.display = 'none'
        segbotao3.style.display = 'none'
        regresso.style.display = 'block'
    }
    function volte(){
       texinicial.style.fontSize = '18pt' 
       texinicial.innerHTML = `Não precisas descubrir tudo sozinho, podes pedir ajuda ${nome}`
       regresso.style.display = 'none'
       botao.style.display = 'block'   
       pontuacao.style.display = 'none'
    }
    function volte2(){
       texinicial.style.fontSize = '18pt' 
       texinicial.innerHTML = `${nome}, o maior tesouro é ter quem nós amamos ao nosso lado`
       regresso2.style.display = 'none'
       botao.style.display = 'block'  
       pergunta.style.display = 'none'
       pergunta2.style.display = 'none'
       pergunta3.style.display = 'none'
       pergunta4.style.display = 'none'
       pergunta5.style.display = 'none'
       pergunta6.style.display = 'none'
       pergunta7.style.display = 'none'
       pergunta8.style.display = 'none'
       pergunta9.style.display = 'none'
       pergunta10.style.display = 'none'
       pergunta11.style.display = 'none'
       pergunta12.style.display = 'none'
       pergunta13.style.display = 'none'
       pergunta14.style.display = 'none'
       pergunta15.style.display = 'none'
       pergunta16.style.display = 'none'
       pergunta17.style.display = 'none'
       pergunta18.style.display = 'none'
       pergunta19.style.display = 'none'
       pergunta20.style.display = 'none'  
       pergunta21.style.display = 'none'
       pergunta22.style.display = 'none'
       pergunta23.style.display = 'none'
       pergunta24.style.display = 'none'
       pergunta25.style.display = 'none'
       pergunta26.style.display = 'none'
       pergunta27.style.display = 'none'
       pergunta28.style.display = 'none'
       pergunta29.style.display = 'none'
       pergunta30.style.display = 'none'     
       
       pergunta.style.backgroundColor = 'white'
       pergunta2.style.backgroundColor = 'white'
       pergunta3.style.backgroundColor = 'white'
       pergunta4.style.backgroundColor = 'white'
       pergunta5.style.backgroundColor = 'white'
       pergunta6.style.backgroundColor = 'white'
       pergunta7.style.backgroundColor = 'white'
       pergunta8.style.backgroundColor = 'white'
       pergunta9.style.backgroundColor = 'white'
       pergunta10.style.backgroundColor = 'white'
       pergunta11.style.backgroundColor = 'white'
       pergunta12.style.backgroundColor = 'white'
       pergunta13.style.backgroundColor = 'white'
       pergunta14.style.backgroundColor = 'white'
       pergunta15.style.backgroundColor = 'white'
       pergunta16.style.backgroundColor = 'white'
       pergunta17.style.backgroundColor = 'white'
       pergunta18.style.backgroundColor = 'white'
       pergunta19.style.backgroundColor = 'white'
       pergunta20.style.backgroundColor = 'white'  
       pergunta21.style.backgroundColor = 'white'
       pergunta22.style.backgroundColor = 'white'
       pergunta23.style.backgroundColor = 'white'
       pergunta24.style.backgroundColor = 'white'
       pergunta25.style.backgroundColor = 'white'
       pergunta26.style.backgroundColor = 'white'
       pergunta27.style.backgroundColor = 'white'
       pergunta28.style.backgroundColor = 'white'
       pergunta29.style.backgroundColor = 'white'
       pergunta30.style.backgroundColor = 'white'     
    }
    /*Secção das respostas certas*/
    function perguntacerta(){
        pergunta3.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        if(pergunta3.style.display == 'block'){
            proximo.style.display = 'block'
        }
        pergunta.style.display = 'none'
        pergunta2.style.display = 'none'
        pontua.style.display ='block'
        pontuacao.innerHTML = 'Pontuação: 1/10'
        
    }
     function perguntacerta1(){
        pergunta4.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo2.style.display = 'block'

        pergunta5.style.display = 'none'
        pergunta6.style.display = 'none'
         pontuacao.innerHTML = 'Pontuação: 2/10'
    }
    function perguntacerta2(){
        pergunta9.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo3.style.display = 'block' 

        pergunta7.style.display = 'none'
        pergunta8.style.display = 'none'
         pontuacao.innerHTML = 'Pontuação: 3/10'
    }
    function perguntacerta3(){
        pergunta11.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo4.style.display = 'block'
        
        pergunta10.style.display = 'none'
        pergunta12.style.display = 'none'
         pontuacao.innerHTML = 'Pontuação: 4/10'
    }
    function perguntacerta4(){
        pergunta14.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo5.style.display = 'block'
        
        pergunta13.style.display = 'none'
        pergunta15.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 5/10'
    }
    function perguntacerta5(){
        pergunta18.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo6.style.display = 'block' 

        pergunta16.style.display = 'none'
        pergunta17.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 6/10'
    }
     function perguntacerta6(){
        pergunta20.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo7.style.display = 'block'
        
        pergunta19.style.display = 'none'
        pergunta21.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 7/10'
    }
    function perguntacerta7(){
        pergunta24.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo8.style.display = 'block' 

        pergunta22.style.display = 'none'
        pergunta23.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 8/10'
    }
    function perguntacerta8(){
        pergunta26.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo!'
        texinicial.style.fontSize = '30pt'
        proximo9.style.display = 'block' 

        pergunta25.style.display = 'none'
        pergunta27.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 9/10'
    }
    function perguntacerta9(){
        pergunta28.style.backgroundColor = 'green'
        texinicial.innerHTML = '✅Certo'
        texinicial.style.fontSize = '30pt'
        proximo10.style.display = 'block' 

        pergunta29.style.display = 'none'
        pergunta30.style.display = 'none'
        pontuacao.innerHTML = 'Pontuação: 10/10'
    }
    /*Secção das botões próximo*/
    function avancar(){
        texinicial.style.fontSize = '18pt'
        pergunta.style.display = 'none' 
        pergunta2.style.display = 'none'
        pergunta3.style.display = 'none'
        texinicial.innerHTML = `2. ${nome}, existe a pessoa mais importante do mundo?`
        proximo.style.display = 'none'
        pergunta4.style.display = 'block' 
        pergunta5.style.display = 'block'
        pergunta6.style.display = 'block'
        
    }
    function avancar2(){
        texinicial.style.fontSize = '18pt'
        pergunta4.style.display = 'none' 
        pergunta5.style.display = 'none'
        pergunta6.style.display = 'none'
        texinicial.innerHTML = `3. ${nome}, qual dessas razões pode levar um aluno ou aluna à depressão?`
        proximo2.style.display = 'none'
        pergunta7.style.display = 'block' 
        pergunta8.style.display = 'block'
        pergunta9.style.display = 'block'
    }
    function avancar3(){
        texinicial.style.fontSize = '18pt'
        pergunta7.style.display = 'none' 
        pergunta8.style.display = 'none'
        pergunta9.style.display = 'none'
        texinicial.innerHTML = `4. ${nome}, qual dessas opções contribui para a inclusão dos alunos na sala de aula?`
        proximo3.style.display = 'none'
        pergunta10.style.display = 'block' 
        pergunta11.style.display = 'block'
        pergunta12.style.display = 'block'
    }
     function avancar4(){
        texinicial.style.fontSize = '18pt'
        pergunta10.style.display = 'none' 
        pergunta11.style.display = 'none'
        pergunta12.style.display = 'none'
        texinicial.innerHTML = `5. ${nome}, sabendo que o lugar onde tu sentas na escola pode decidir o teu futuro, qual é o melhor lugar para se sentar na escola?`
        proximo4.style.display = 'none'
        pergunta13.style.display = 'block' 
        pergunta14.style.display = 'block'
        pergunta15.style.display = 'block'
    }
     function avancar5(){
        texinicial.style.fontSize = '18pt'
        pergunta13.style.display = 'none' 
        pergunta14.style.display = 'none'
        pergunta15.style.display = 'none'
        texinicial.innerHTML = `6. ${nome}, quem são os melhores alunos da turma?`
        proximo5.style.display = 'none'
        pergunta16.style.display = 'block' 
        pergunta17.style.display = 'block'
        pergunta18.style.display = 'block'
    }
    function avancar6(){
        texinicial.style.fontSize = '18pt'
        pergunta16.style.display = 'none' 
        pergunta17.style.display = 'none'
        pergunta18.style.display = 'none'
        texinicial.innerHTML = `7. ${nome}, quem é o Responsável pela promoção da paz na sala aula?`
        proximo6.style.display = 'none'
        pergunta19.style.display = 'block' 
        pergunta20.style.display = 'block'
        pergunta21.style.display = 'block'
    }
    function avancar7(){
        texinicial.style.fontSize = '18pt'
        pergunta19.style.display = 'none' 
        pergunta20.style.display = 'none'
        pergunta21.style.display = 'none'
        texinicial.innerHTML = `8. ${nome}, se algum colega ou alguma colega desmaiar na sala de aula, o que deves fazer?`
        proximo7.style.display = 'none'
        pergunta22.style.display = 'block' 
        pergunta23.style.display = 'block'
        pergunta24.style.display = 'block'
    }
    function avancar8(){
        texinicial.style.fontSize = '18pt'
        pergunta22.style.display = 'none' 
        pergunta23.style.display = 'none'
        pergunta24.style.display = 'none'
        texinicial.innerHTML = `9. ${nome}, qual destas opções define um bom aluno`
        proximo8.style.display = 'none'
        pergunta25.style.display = 'block' 
        pergunta26.style.display = 'block'
        pergunta27.style.display = 'block'
    }
    function avancar9(){
        texinicial.style.fontSize = '18pt'
        pergunta25.style.display = 'none' 
        pergunta26.style.display = 'none'
        pergunta27.style.display = 'none'
        texinicial.innerHTML = `10. ${nome}, qual destas frases é mais falada numa sala sem professor?`
        proximo9.style.display = 'none'
        pergunta28.style.display = 'block' 
        pergunta29.style.display = 'block'
        pergunta30.style.display = 'block'
    }
     function avancar10(){
        texinicial.style.fontSize = '24pt'
        pergunta28.style.display = 'none' 
        pergunta29.style.display = 'none'
        pergunta30.style.display = 'none'
        texinicial.innerHTML = `Execelente, ${nome} você é muito inteligente`
        proximo10.style.display = 'none'
        regresso.style.display = 'block'
         pergunta.style.backgroundColor = 'white'
       pergunta2.style.backgroundColor = 'white'
       pergunta3.style.backgroundColor = 'white'
       pergunta4.style.backgroundColor = 'white'
       pergunta5.style.backgroundColor = 'white'
       pergunta6.style.backgroundColor = 'white'
       pergunta7.style.backgroundColor = 'white'
       pergunta8.style.backgroundColor = 'white'
       pergunta9.style.backgroundColor = 'white'
       pergunta10.style.backgroundColor = 'white'
       pergunta11.style.backgroundColor = 'white'
       pergunta12.style.backgroundColor = 'white'
       pergunta13.style.backgroundColor = 'white'
       pergunta14.style.backgroundColor = 'white'
       pergunta15.style.backgroundColor = 'white'
       pergunta16.style.backgroundColor = 'white'
       pergunta17.style.backgroundColor = 'white'
       pergunta18.style.backgroundColor = 'white'
       pergunta19.style.backgroundColor = 'white'
       pergunta20.style.backgroundColor = 'white'  
       pergunta21.style.backgroundColor = 'white'
       pergunta22.style.backgroundColor = 'white'
       pergunta23.style.backgroundColor = 'white'
       pergunta24.style.backgroundColor = 'white'
       pergunta25.style.backgroundColor = 'white'
       pergunta26.style.backgroundColor = 'white'
       pergunta27.style.backgroundColor = 'white'
       pergunta28.style.backgroundColor = 'white'
       pergunta29.style.backgroundColor = 'white'
       pergunta30.style.backgroundColor = 'white'
    }
    <!--Secção das respostas erradas-->

    function errado1(){
        pergunta.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta2.style.display = 'none'
        pergunta3.style.display = 'none'
    }
    function errado2(){
        pergunta2.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta.style.display = 'none'
        pergunta3.style.display = 'none'
    }
    function errado3(){
        pergunta5.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta4.style.display = 'none'
        pergunta6.style.display = 'none'
    }
    function errado4(){
        pergunta6.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta4.style.display = 'none'
        pergunta5.style.display = 'none'
    }
    function errado5(){
        pergunta7.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta8.style.display = 'none'
        pergunta9.style.display = 'none'
    }
    function errado6(){
        pergunta8.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta7.style.display = 'none'
        pergunta9.style.display = 'none'
    }
    function errado7(){
        pergunta10.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta11.style.display = 'none'
        pergunta12.style.display = 'none'
    }
    function errado8(){
        pergunta12.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta10.style.display = 'none'
        pergunta11.style.display = 'none'
    }
    function errado9(){
        pergunta13.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta14.style.display = 'none'
        pergunta15.style.display = 'none'
    }
    function errado10(){
        pergunta15.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta13.style.display = 'none'
        pergunta14.style.display = 'none'
    }
    function errado11(){
        pergunta16.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta17.style.display = 'none'
        pergunta18.style.display = 'none'
    }
    function errado12(){
        pergunta17.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta16.style.display = 'none'
        pergunta18.style.display = 'none'
    }
    function errado13(){
        pergunta19.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta20.style.display = 'none'
        pergunta21.style.display = 'none'
    }
    function errado14(){
        pergunta21.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta19.style.display = 'none'
        pergunta20.style.display = 'none'
    }
    function errado15(){
        pergunta22.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta23.style.display = 'none'
        pergunta24.style.display = 'none'
    }
    function errado16(){
        pergunta23.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta22.style.display = 'none'
        pergunta24.style.display = 'none'
    }
    function errado17(){
        pergunta25.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta26.style.display = 'none'
        pergunta27.style.display = 'none'
    }
    function errado18(){
        pergunta27.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção erada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta25.style.display = 'none'
        pergunta26.style.display = 'none'
    }
    function errado19(){
        pergunta29.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta28.style.display = 'none'
        pergunta30.style.display = 'none'
    }
    function errado20(){
        pergunta30.style.backgroundColor = 'red'
        texinicial.innerHTML = `❌<p>Opção errada</p>`
        texinicial.style.fontSize = '30pt'
        regresso2.style.display = 'block'
        pergunta28.style.display = 'none'
        pergunta29.style.display = 'none'
    }