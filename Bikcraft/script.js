const btn = document.getElementById('btn')
const bike = document.getElementById('bike')
const sub = document.getElementById('subtitulo')
const van = document.getElementById('van')
const cont = document.getElementsByClassName('conteudo')
const ver = document.getElementById('vermais')
const intro = document.getElementById('intro')

const h1 = intro.querySelector('h1')
const P = intro.querySelector('p')


function hClick(event){
    event.preventDefault()
    btn.classList.add('animaintro')
    
    bike.classList.add('sumiço')
    
    setTimeout(() => {
        
        bike.classList.add('block')
        
    }, 1000)

   sub.classList.add('sumiço')

   setTimeout(() => {


    sub.classList.add('block')

   }, 3000)

   setTimeout(() => {
       cont.classList.add('conteudomais')
   }, 2000)

   setTimeout(() => {
    van.classList.add('sumiço')
    van.classList.add('block')
}, 0500)


setTimeout(() => {
    ver.classList.add('oi')
    ver.classList.remove('block')

}, 3000)

    h1.classList.add('byebye')
    P.classList.add('byebye')
    btn.classList.add('inv')
    
    


    
    setTimeout(() => {
        
        h1.innerHTML = "<h2 style='text-Align: left;'>Detalhes da Bicicleta </h2>"
        P.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius temporibus hic ab reiciendis amet, earum ipsa quae aut adipisci doloribus quasi explicabo quia laudantium ipsum saepe laboriosam eligendi sit!"
        P.classList.add('sumiçoEnd','center')
        h1.classList.add('sumiçoEnd', 'center')
       
    }, 2000)

    
    

}



btn.addEventListener('click', hClick)

console.log(intro[1])