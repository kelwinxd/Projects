const Form = document.querySelector('.generate-form')
const Gallery = document.querySelector('.image-gallery')

const OPENAI_API_KEY = "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"

const generateImages = async (userPrompt,userImgQuant) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method:"POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: userPrompt,
                n: parseInt(userImgQuant),
                size: "512x512",
                response_format: "b64_json"
            })
         
        })

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

const handleForm = (e) => {
    e.preventDefault()
     const userPrompt = e.srcElement[0].value
     const userImgQuant = e.srcElement[1].value

     const imgControl = Array.from({length:userImgQuant}, () => 
       ` <div class="img-card loading">
       <img src="images/loader.svg" alt="" >
       <a href="#" class="download-btn">
           <img src="images/download.svg" alt="" >
       </a>
  </div>`

     ).join("")
      
     Gallery.innerHTML = imgControl
     generateImages(userPrompt, userImgQuant)
     console.log(userPrompt,userImgQuant)

}


Form.addEventListener('submit',handleForm)