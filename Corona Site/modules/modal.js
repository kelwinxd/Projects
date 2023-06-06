export default function (){
    console.log("modal succesful")
}


const open = document.querySelector('[data-modal="abrir"]')
const close = document.querySelector('[data-modal="fechar"]')
const container = document.querySelector('[data-modal="container"]')

function openModal(event){
   event.preventDefault()
   container.classList.add('ativo')

}

function closeModal(){
    container.classList.remove('ativo')
}

function outModal(event){
   event.preventDefault()
   if(event.target == this)
   closeModal()
}

open.addEventListener("click", openModal)
close.addEventListener("click", closeModal)
container.addEventListener("click",outModal)