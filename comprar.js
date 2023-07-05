let menos;
let mais;
let comprar;
let medir;
let somando;
let precoUnico;
let comprando;

menos = document.querySelector(".button1");
mais = document.querySelector(".button2");
comprar = document.querySelector(".comprar");
medir = document.querySelector(".medir")
precoUnico = document.querySelector(".dinheiro")

somando = medir.innerHTML;
comprando = precoUnico.innerHTML;


function somar()
{ 
    somando = parseInt(somando) + 1;
    medir.innerHTML = somando;
}

function subtrair()
{
    somando = parseInt(somando) - 1;
    medir.innerHTML = somando;
}

let valores = document.getElementById("Valor")
let multiplicar = medir.innerHTML;

function conta()
{
   valores.innerHTML = parseInt(medir.innerHTML) * 125;  
}
