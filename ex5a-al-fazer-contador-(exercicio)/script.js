const btn = document.getElementById('btn')
const text = document.querySelector('p')
const body = document.querySelector('body')

let number = Number(text.textContent)

function attColor(){
    if(number % 2 === 0){
    body.style.backgroundColor = "green"
    } else{
        body.style.backgroundColor = "red"
    }
}

attColor()
btn.addEventListener("click", () => {
    number = number + 1

    text.textContent = number;

    attColor()
})