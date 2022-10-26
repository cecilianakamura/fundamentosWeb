const botao = document.querySelector("#enviar")
console.log(botao)

function envio(){
    alert('Mensagem enviada com sucesso!')
    botao.innerHTML='Enviado!'
}

const nome = document.querySelector('#nome')

function validaNome(){
    console.log(nome.value.lenght)
    if(nome.value.lenght<=2){
        alert('Nome inválido.')
    }
    
}