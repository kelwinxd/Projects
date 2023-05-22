const range = document.querySelector("#input")
const light = document.querySelector("#light")
const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
const hsl = document.getElementById("hsl")
const div = document.querySelector(".div")
const lightness = document.getElementById("lightness")
const sat = document.getElementById("sat")
const saturn = document.getElementById("satur")
const but = document.querySelector("button")
const values = document.querySelector(".values")
const right = document.querySelector(".right")


function Initial(){
    range.value = 0
    light.value = 50
}
Initial()



function handColor(){
  const Value = range.value

  document.body.style.setProperty("--hue", Value)
  hsl.textContent = `HSL(${parseInt(range.value )}`

  


}

function handLight(){
    const Value2 = light.value
    document.body.style.setProperty("--light", Value2 + "%")
    lightness.textContent = `${parseInt(light.value)}%)`

    
}


function handSat(){
    const Value3 = sat.value
    document.body.style.setProperty("--sat", Value3 + "%")
    saturn.textContent = `,${parseInt(sat.value)}%,`

}





but.addEventListener("click", function(){
    const Text = values.textContent
    const formatText1 = Text.trim().slice(0,7).trim()
    const formatText2 = Text.trim().slice(18,26).trim()
    const formatText3 = Text.trim().slice(35,45).trim()
    const alltext = formatText1 + formatText2 + formatText3
    navigator.clipboard.writeText(alltext)
    

  

    .then(() => {
        // Ação de sucesso
        console.log("Texto copiado para a área de transferência: " + alltext);
        function allright(){
            right.classList.remove("none")
            setTimeout(() => {
                right.classList.add("none")
            },1000 )
           
            
         }
         allright()
        
        
      })
      .catch((error) => {
        // Tratamento de erro
        console.error("Erro ao copiar texto: " + error);
      });


})
sat.addEventListener("input", handSat)
range.addEventListener("input", handColor)
light.addEventListener("input", handLight)



   
    
   
    


