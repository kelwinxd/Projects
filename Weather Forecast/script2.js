


function scrollAnima(){
    const secs = document.querySelectorAll('.js-scroll')
    const fixed = document.querySelector('.fixed')
    const ele = document.querySelector('.ele')
    const valueY = window.scrollY
    if(valueY < 100){
        fixed.style.borderRadius = 4.5 + 'rem'
        ele.style.top = 50 + 'px'
        ele.style.left = 70 + '%'
    }else {
        fixed.style.borderRadius = valueY * 1.2 + 'px'
        
        
    }

    if(valueY > 200){
        ele.classList.add('move')
    }else {
        ele.classList.remove('move')
    }
   
  
    
    if(secs.length){
        secs.forEach((s) => {
            
            const topSec = s.getBoundingClientRect().top
            const isVisible = ((topSec + 290) - window.innerHeight) < 0
            

           if(isVisible){
            s.classList.add('ativo')
           } else {
            s.classList.remove('ativo')
           }

        })
    }
  
}
window.addEventListener('scroll',scrollAnima)

scrollAnima()
