// Seleciona o elemento do botão no DOM usando o ID "myButton" e armazena na variável 'button'
const myButton = document.querySelector('button')
// 3ª Digitação (Aqui) 

// Seleciona o elemento de parágrafo no DOM usando o ID "myText" e armazena na variável 'text'
let myText = document.getElementById('pText')

// Adiciona um "ouvinte" de evento ao botão. Quando o botão for clicado, a função dentro do 'addEventListener' será executada

myButton.addEventListener("click", () =>{
    myText.textContent = "Olá, Mundo!"
})