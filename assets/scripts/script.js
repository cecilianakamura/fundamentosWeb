let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK=false
let emailOK=false
let assuntoOK=false
let mapa = document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.lenght<=2){
        txtNome.innerHTML='Nome inválido!'
        txtNome.style.color='red'
    }else{
        txtNome.innerHTML='Nome válido'
        txtNome.style.cor='green'
        nomeOK=true
    }
}

function validaEmail(){
    let txtEmail=document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.co')==-1 || email.value.indexOf('.org')==-1){
        txtEmail.innerHTML='E-mail inválido'
        txtEmail.style.color='red'
        email.style.backgroundColor='red'
    }else{
        txtEmail.innerHTML='E-mail válido'
        txtEmail.style.color='green'
        emailOK=true
    }
}

function validaAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')
    if(assunto.value.lenght>=100){
        txtAssunto.innerHTML= 'Texto excedeu o limite de 100 caracteres.'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoOK=true
    }
}

const botao = document.querySelector("#enviar")
console.log(botao)


function envio(){
    if(nomeOK==true && emailOK==true && assuntoOK ==true){
        alert('Mensagem enviada com sucesso!')
    }else{
    alert('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = '800 px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400 px'
    mapa.style.height = '250px'
}