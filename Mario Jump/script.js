const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const cloud1 = document.querySelector(".cloud")
const cloud = document.getElementById("cl")
const score = document.querySelector(".score")
const koopa = document.querySelector(".koopa")
const bullet = document.querySelector(".bullet")


function jump(e){
   if(e.key === 'ArrowUp'){
     mario.classList.add("jump")
     setTimeout(() => {
       
            mario.classList.remove("jump")
        
     }, 500)
     
   }

}

const scoring = setInterval(() => {

    score.textContent ++
},200)

let actived = true

function GameDinamic(){
    if (actived){

    
   setTimeout(()=> {
      koopa.classList.add('block')
    koopa.classList.add('animation')
   
   }, 6000)
   
   setTimeout(() => {
   pipe.style.display = 'none'
   },5650)
   
   setTimeout(() => {
       pipe.style.display = 'block'
      },10000)
      setTimeout(() => {
         koopa.style.display = 'none'
        },11500)

        setTimeout(() => {
         bullet.classList.add("animation")
        },15000)

        setTimeout(() => {
         pipe.style.display = 'none'
        },13500)


   
      }
}

function animaState(){
   window.getComputedStyle()
}

GameDinamic()


const loop = setInterval(() => {
const bulletPosition = bullet.offsetLeft
const koopaPosition = koopa.offsetLeft   
const pipePosition = pipe.offsetLeft
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')



if((pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) || ( koopaPosition <= 120 && koopaPosition > 0 &&  marioPosition < 80) || ( bulletPosition <= 90 && bulletPosition > 0 &&  marioPosition < 70)  ){
active = false   
pipe.style.animation = 'none'
pipe.style.left = `${pipePosition}px`

koopa.classList.remove("animation")
koopa.style.left = `${koopaPosition}px`

mario.style.animation = 'none'
mario.style.bottom = `${marioPosition}px`
mario.setAttribute('src','./Imgs/game-over.png')
mario.style.width = '80px'
mario.style.marginLeft = '50px'

bullet.classList.remove("animation")
bullet.style.left = `${bulletPosition}px`



clearInterval(scoring)

score.textContent = `${score.textContent}`


clearInterval(loop)
}
},10)

console.log(koopa.offsetTop)



setTimeout(()=> {
   cloud.classList.add("cloudsA")
}, 5000)








console.log(window.getComputedStyle(mario).bottom)

document.addEventListener('keydown', jump)