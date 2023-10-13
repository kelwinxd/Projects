const btnDrop = document.querySelector('.btn-drop')
const drop = document.querySelector('.drop')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.mod-container')
const closeM = document.querySelector('.close')



btnDrop.addEventListener('click', () => {
   drop.classList.toggle('ativo')
})

document.addEventListener('click', (event) => {
const element = event.target
if(!btnDrop.contains(element) && !drop.contains(element)){
    drop.classList.remove('ativo')
}
})

document.addEventListener('click', (event) => {
    const element = event.target
    if(!containerModal.contains(element) && !modal.contains(element)){
        containerModal.classList.remove('ativo')
    }
    })


function modalOpen(){
containerModal.classList.add('ativo')


}

function closeModal(){
    containerModal.classList.remove('ativo')
}


function outModal(event){
    event.preventDefault()
    const el = event.target
    if(el != this)
    closeModal()
 }



function animaScroll(){
    const scrollItems = document.querySelectorAll('.js-scroll')
    if(scrollItems.length){
        scrollItems.forEach((s) => {
            
            const topSec = s.getBoundingClientRect().top
            const isVisible = ((topSec + 200) - (window.innerHeight)) < 0
            

           if(isVisible){
            s.classList.add('ativo2')
           } else {
            s.classList.remove('ativo2')
           }

        })
    }

}
window.addEventListener('scroll', animaScroll)
animaScroll()


const btnFetch = document.querySelector('#btnS')
const divTemp = document.querySelector(".showT")

function fetchApi(event){
    event.preventDefault()
    const City = document.querySelector('#input1').value.toString()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(City)}&appid=7e9475cacf35b9da97d63abdb838ec1a`).then(r => r.json())
    .then(r => {
        console.log(r)
        
       document.querySelector('#temp').textContent = +(r.main.temp - 273).toFixed(1) + ' °C'
      if(r.weather.main == "Clear"){
        console.log("Claro")

      }
      function conditionW(main){
        const img = document.querySelector("#img")
        
       switch (main) {
        case "Clouds":
            img.src = "./clouds.png"
            return "Nublado"
            
            
        case "Clear":
            img.src = "./sunny.png"
             return "Ensolarado"
        default:
            break;
       }

       
      }
       document.querySelector('#main').textContent = conditionW(r.weather[0].main)
      
        

    }).catch(rej => {
        document.querySelector('#temp').textContent = ""
        document.querySelector('#main').textContent = ""
        divTemp.removeChild(img)
        const errorM = document.createElement("h2")
        errorM.classList.add('error')
        errorM.innerText= 'Não encontrado'
        divTemp.appendChild(errorM)
    })
    
}

btnFetch.addEventListener('click', fetchApi)





closeM.addEventListener('click',closeModal)
modal.addEventListener('click', modalOpen)
containerModal.addEventListener('click', outModal)









