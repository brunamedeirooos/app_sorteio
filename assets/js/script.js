/*VARIAVEIS - espaço na memoria para guardar a informação
LET - aqui voce consegue mudar o valor da variavel
COSNT - aqui na constante o valor não muda
 */

// selecionar as tags
// interceptar o click no botão (evento de click) / pegar as informaçoes que estão dentro do campo

// aqui ele vai acessar o documento html e vai selecionar o botão que tem essa classe
//seleciona os elementos
const btnSortear    = document.querySelector(".botaoSortear")
const textarea      = document.querySelector("textarea")
const tagResultado      = document.querySelector(".resultado p")
const popUpResultado      = document.querySelector(".resultado")
const btnFechar      = document.querySelector(".fechar")



// pegando dados do formulario - cria uma função
function pegarDadosFormulario(){
   
    //recuperando valor do campo(textarea)
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome = listaNomes[posicaoNome]
    mostrarResultado(nome)

    
    // apos o sorteio ficara limpo a tela - preferi nao limpar a tela apos o sorteio e sim deixar ainda com os mesmo nome na tela
    //textarea.value = ""
    


   

}

//observar para interceptar o evento// executar função
btnSortear.addEventListener("click", pegarDadosFormulario)


//função para gerar os nomes aleatorios
function gerarNumeroAleatorio(tamanhoArray){
    // retorna o numero
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0)

}

function mostrarResultado(nome){
    
    
    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")

    
}



function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")



}
btnFechar.addEventListener("click", fecharPopUp)




