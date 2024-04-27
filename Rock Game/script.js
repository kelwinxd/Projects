const userResult = document.querySelector('.user-result img'),
      optionImages = document.querySelectorAll('.option-image'), 
      cpuResult = document.querySelector('.cpu-result img'),
      result = document.querySelector('.result'),
      container = document.querySelector('.container .result-images')

optionImages.forEach((img, index) => {
    img.addEventListener('click', () => {
          optionImages.forEach((i) => {
            i.classList.remove('active')
          })
          
          img.classList.add('active')

          container.classList.add('shake')
          
          setTimeout(()=>{

            container.classList.remove('shake')
            let imgSrc = img.querySelector('img').src
            console.log(imgSrc)
  
            userResult.src = imgSrc
  
            let ramdomNumber = Math.floor(Math.random() * 3)
            console.log(ramdomNumber)
  
            const Images = ['./images/rock.png','./images/paper.png','./images/scissors.png']
  
            cpuResult.src = Images[ramdomNumber]
  
           let cpuValues = ["R","P","S"][ramdomNumber]
           let userValues = ["R","P","S"][index]
           const draw = "Draw!", win = "You Win!", lose = "You Lose!"
           const output = {
            "RP": lose,
            "RS": win,
            "RR": draw,
            "PR":win,
            "PS":lose,
            "PP":draw,
            "SP":win,
            "SR":lose,
            "SS":draw
           }
  
           let outCome = output[userValues+cpuValues]
           result.textContent = outCome
            
          },1500)

          


          
    })

})