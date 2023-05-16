let valor = document.querySelector('#valor')
let botao = document.querySelector('#botao')

function valornormal(){
    let a = Number(valor.value);
    valor1.innerHTML = a
}
function valorporcentagem(){
    let b = Number(valor.value);
    porcentagem.innerHTML = b + b * 1/100;
}

botao.onclick = function(){
    valornormal();
    valorporcentagem();
}