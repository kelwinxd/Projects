const cardArray = [
  {
    name:'grape',
    img:'imgs/grape.jpg'
  },
  {
    name:'hamb',
    img:'imgs/hamb.jpg'
  },
  {
    name:'hotdog',
    img:'imgs/hotdog.jpg'
  },
  {
    name:'lettuce',
    img:'imgs/lettuce.jpg'
  },
  {
    name:'pepper',
    img:'imgs/pepper.jpg'
  },
  {
    name:'salad',
    img:'imgs/salad.jpg'
  },
  {
    name:'grape',
    img:'imgs/grape.jpg'
  },
  {
    name:'hamb',
    img:'imgs/hamb.jpg'
  },
  {
    name:'hotdog',
    img:'imgs/hotdog.jpg'
  },
  {
    name:'lettuce',
    img:'imgs/lettuce.jpg'
  },
  {
    name:'pepper',
    img:'imgs/pepper.jpg'
  },
  {
    name:'salad',
    img:'imgs/salad.jpg'
  }




]

/*Método de embaralhamento*/
/*0.5 define a intensidade da aleatoriedade*/ 
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let ChosenID = []
const cardsWon = []
const vic = document.querySelector(".victory")



function createBoard(){
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src','imgs/blank.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)  
    gridDisplay.appendChild(card)
    
    
  }
}

createBoard()

let result = document.getElementById("result")
function checkMatch(){
  const cards = document.querySelectorAll('img')

  
  if(cardsChosen[0] == cardsChosen[1]){
    alert("You found a match!")


    cards[ChosenID[0]].setAttribute('src','imgs/nada.png')
    cards[ChosenID[0]].style.opacity = '0';
    

    cards[ChosenID[1]].setAttribute('src','imgs/nada.png')
    cards[ChosenID[1]].style.opacity = '0';
    cards[ChosenID[0]].removeEventListener('click',flipCard)
    cards[ChosenID[1]].removeEventListener('click',flipCard)

    cardsWon.push(cardsChosen)
    result.textContent = parseInt(result.textContent) + 1
    

  }else {
   cards[ChosenID[0]].setAttribute('src','imgs/blank.jpg')
   cards[ChosenID[1]].setAttribute('src','imgs/blank.jpg')
   alert('sorry, try again')

  }

  cardsChosen = []
  ChosenID = []

  if(cardsWon.length == cardArray.length / 2){
    vic.classList.add('block')
    
    
  }
}





let tent = document.getElementById("temp")

function reset(){
  location.reload();
  vic.classList.add('none')

}

function flipCard(){
  let cardID = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardID].name)
  ChosenID.push(cardID)
   console.log(cardsWon)
   let Cardimg = cardArray[cardID].img
   
   this.setAttribute('src', Cardimg)
   console.log(cardArray)

   if(cardsChosen.length === 2 ){
    setTimeout(checkMatch, 500)
    tent.textContent = parseInt(tent.textContent) + 1
   }

}





