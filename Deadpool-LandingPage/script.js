const modelViewer = document.querySelector('.bones');
const modelWol = document.querySelector('.wol')



//document.querySelector(".play").addEventListener('click', ()=>{
   // modelViewer.play()
   // document.querySelector('.pause').removeAttribute('disabled')
   // document.querySelector('.play').setAttribute('disabled', 'disabled')
    
//})

//document.querySelector(".pause").addEventListener('click', ()=>{
   // modelViewer.pause()
  //  document.querySelector('.play').removeAttribute('disabled')
  //  document.querySelector('.pause').setAttribute('disabled', 'disabled')

    
//})


let scrollY = 0;

        // Adicione um evento de rolagem ao documento
        window.addEventListener('scroll', () => {
            // Obtenha a quantidade de rolagem
            scrollY = window.scrollY;

            // Atualize a rotação com base na quantidade de rolagem
            updateRotation();
        });

        // Adicione um evento de redimensionamento da janela para atualizar a rotação se necessário
        window.addEventListener('resize', () => {
            updateRotation();
        });

        function updateRotation() {
            // Calcule a rotação com base na quantidade de rolagem
            let rotationY = scrollY / window.innerHeight * 90; // 

            // Limite a rotação a 90 graus
            rotationY = Math.min(rotationY, 90);
            console.log(rotationY)
            
            
        
            let translateX = scrollY ; 
        
           
            modelViewer.cameraOrbit = `${rotationY}deg ${rotationY - 20}deg 4m`;
            

            console.log(`${rotationY/5}deg ${rotationY}deg 4m`)

            if(scrollY < 2000){
                modelViewer.style.transform = `translate(-50%, ${scrollY}px)`
                modelWol.style.transform = `translate(-50%, ${scrollY}px)`

              
            } 
            if(scrollY > 1000) {
                document.querySelector('.model3d').style.transform = 'translateX(400px)'
                document.querySelector('.model3d').style.transition = 'all 2s ease'
                modelWol.style.transition = ' all .8s ease;'
                modelWol.style.transform = 'translateX(-80%)'
            } else {
                document.querySelector('.model3d').style.transform = 'translateX(0)'
            }
                
           

      
        
       
            console.log(rotationY)

        }

