let input=document.querySelector('input')
let guess=document.querySelector('.guess')
let easy =document.querySelector('.easy')
let medium =document.querySelector('.medium')
let hard = document.querySelector('.hard')
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let number=[Math.floor(Math.random()*10)]
guess.addEventListener('click',()=>{
    if(input.value==number){
        win.innerText='Congratulation'
        win.classList.add('text-warning')
        input.value=''
        lose.innerText=''
    }else if (input.value!=number) {
       lose.innerText='Wrong'
       lose.classList.add('text-danger')
        input.value=''
        win.innerText=''
    }
    })
easy.addEventListener('click',()=>{
     number=[Math.floor(Math.random()*10)]
     input.value=''
})
medium.addEventListener('click',()=>{
    number=[Math.floor(Math.random()*100)]
    input.value=''
})
hard.addEventListener('click',()=>{
    number=[Math.floor(Math.random()*1000)]
    input.value=''
})