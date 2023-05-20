const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const Check = document.querySelector(".keys-checkbox input")



let allKeys = [],
audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 200)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
   key.addEventListener("click", () => playTune(key.dataset.key)
)})


const pressKey = (e) => {
    if(allKeys.includes(e.key))
      playTune(e.key)
}
function handVol(e){
audio.volume = e.target.value
}


function Active(){
   pianoKeys.forEach((item) => {
    item.classList.toggle("hide")
   })
}

Check.addEventListener("click", Active)



volumeSlider.addEventListener("input", handVol)

document.addEventListener("keydown", pressKey)