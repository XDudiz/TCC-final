let menu =document.getElementById('myNav')
let conteudo =document.getElementById('main')
let conteudo2 =document.getElementById('myheader')
let conteudo3 =document.getElementById('main2')
let conteudo4 =document.getElementById('myFooter')

function openNav(){
    menu.style.width= '250px'
    conteudo.style.filter = "blur(2px)"
    conteudo2.style.filter = "blur(2px)"
    conteudo3.style.filter = "blur(2px)"
    conteudo4.style.filter = "blur(2px)"
}

function closeNav(){
    menu.style.width='0'
    conteudo.style.marginLeft='0px'
    conteudo.style.filter = "blur(0px)"
    conteudo2.style.filter = "blur(0px)"
    conteudo3.style.filter = "blur(0px)"
    conteudo4.style.filter = "blur(0px)"
}