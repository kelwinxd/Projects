const SPEED = .02


export default class Paddle {
    constructor(paddleElem){
        this.paddleElem = paddleElem
        
    }


    get position(){
      return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value){
 this.paddleElem.style.setProperty("--position", value)
    }

    rect(){
        return this.paddleElem.getBoundingClientRect()
    }

    

    update(delta, ballHeight){
        this.position += SPEED * delta * ( ballHeight - this.position ) + 3
    }
}

function randomNumbern(min,max){
    return Math.random() * (max - min) + min;
}
