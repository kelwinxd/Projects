const title = document.querySelector('.title')
const phrase = "Do you know the meaning of Easter?"
const desc = document.querySelector('.desc-egito')
const sec2 = document.querySelectorAll('.slide')
const rock = document.querySelector('.model3')
const desc2 = document.querySelector('.desc-res')
const sec3 = document.querySelector('.section3')

console.log(rock)

function openRock(){
    rock.play()
    setTimeout(() => {
        rock.pause()
        desc2.classList.add('appear')
        setTimeout(() => { desc2.textContent = "...He was not there. He has risen!"},100)
       sec3.classList.add('wakeup')
       window.scrollBy({
        top: window.innerHeight + 20, // Mude o valor conforme desejado
        left: 0,
        behavior: 'smooth' 
       })
       
       
    },1800)

    setTimeout(() => {
        document.querySelector('.final-title').classList.add('opa')
    },2000)

    rock.removeEventListener('click',openRock)
}

console.log(window.innerHeight)
rock.addEventListener('click', openRock)

let index = 0

function type(){
    title.textContent = phrase.slice(0, index++)

    if(index <= phrase.length){
        setTimeout(type, 90)
    }
    
    if (index == phrase.length){
        title.classList.add('bar')
    }
}


window.onload = function() {
    const pyramid = document.querySelector('.model2');
    pyramid.play();
    
    setTimeout(() => {
        pyramid.pause();
    }, 4000);

    type()
    setTimeout(()=>{ desc.classList.add('ativo')},4100)
   

    console.log(pyramid)
};





function handleScroll() {
    let scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollY);

    if (scrollY > 100) {
        document.querySelector('.model').play();
        
      
        
        sec2.forEach((e) => {
            e.classList.add('come')
        })
        
            
        
        setTimeout(() => {
            document.querySelector('.model').pause();
         
            
        }, 1600);

     
    


       
       
        

        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
    }


 
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);

