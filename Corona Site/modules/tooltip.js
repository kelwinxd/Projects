export default function Tooltip(){
    console.log("tooltip")
}  

const tool = document.querySelectorAll("[data-tooltip]")

tool.forEach((item) => {
    item.addEventListener("mouseover", mouseOver)
})

function mouseOver(e){
   const box = tipBox(this)
   box.style.top = e.pageY + 'px'
   box.style.left = e.pageX - 50 + 'px'
  console.log(e)
function onMouseLeave(){
    box.remove()
}

  this.addEventListener('mouseleave', onMouseLeave)
}

function tipBox(element){
    const box = document.createElement('div')
    const text = element.getAttribute('aria-label')
    box.classList.add('tooltip')
    box.innerText = text
    console.log(box)
    
        document.body.appendChild(box)
        
   

    return box
    


}