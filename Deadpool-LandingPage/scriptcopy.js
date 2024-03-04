const modelViewers = document.querySelectorAll('.bones');
const Wol = document.querySelector('.wol')

// Adicione um evento de rolagem ao documento
window.addEventListener('scroll', () => {
    // Obtenha a quantidade de rolagem
    let scrollY = window.scrollY;

    // Itere sobre cada elemento da NodeList
    modelViewers.forEach(modelViewer => {
        // Atualize a rotação com base na quantidade de rolagem
        updateRotation(modelViewer, scrollY);
    });
});

// Adicione um evento de redimensionamento da janela para atualizar a rotação se necessário
window.addEventListener('resize', () => {
    // Itere sobre cada elemento da NodeList
    modelViewers.forEach(modelViewer => {
        updateRotation(modelViewer, window.scrollY);
    });
});

function updateRotation(modelViewer, scrollY) {
    // Calcule a rotação com base na quantidade de rolagem
    let rotationY = scrollY / window.innerHeight * 90;

    // Limite a rotação a 90 graus
    rotationY = Math.min(rotationY, 90);

    let translateX = scrollY;

    modelViewer.cameraOrbit = `${rotationY}deg ${rotationY - 20}deg 4m`;
    Wol.cameraOrbit = `${rotationY-70}deg ${rotationY - 20}deg 4m`;
    console.log(scrollY)

    if(scrollY < 300){
        document.querySelector('.containerwol').style.display = "none"
    } else {
        document.querySelector('.containerwol').style.display = "block"
    }

    if (scrollY < 2000) {
        modelViewer.style.transform = `translate(-50%, ${scrollY}px)`;
        
        // Se você quiser acessar propriedades específicas dentro do modelViewer, ajuste conforme necessário
    }

    if (scrollY > 1000) {
        document.querySelector('.model3d').style.transform = 'translateX(500px)';
        document.querySelector('.model3d').style.transition = 'all 2s ease';
        // Se precisar aplicar efeitos específicos a cada modelo dentro da NodeList, ajuste conforme necessário
    } else {
        document.querySelector('.model3d').style.transform = 'translateX(0)';
    }

    if(scrollY<1000){
        document.querySelector('.containerwol').style.left = "-1800px"
        document.querySelector('.logow').style.left = "-2000px"
       


    } else {
        document.querySelector('.containerwol').style.left = "-500px"
        document.querySelector('.logow').style.left = "-50%"
        
       
    }
    const windowMetade = window.innerHeight * 0.6;
    const sectionTop = document.querySelector('.description').getBoundingClientRect().top;
    const isSectionVisible = ((sectionTop + 40) - (windowMetade)) < 0;
    if(isSectionVisible){
        document.querySelector('.description').classList.add('active')
    }
    if(scrollY > 1210){
        document.querySelector('.wolfundo').style.left = "0"
    }else {
        document.querySelector('.wolfundo').style.left = "-2000px"
    }

    if(scrollY > 3300){
       
        document.querySelector('.head').cameraOrbit = `deg 78deg 4m`;
        document.querySelector('.head').play()


    }

    if(scrollY > 3500){
        document.querySelector('.head').style.width = '1000px'
        document.querySelector('.head').style.height = '1000px'
        document.querySelector('.head').style.position = 'fixed'
        document.querySelector('.head').style.top = '3800px'




    }else {
        document.querySelector('.head').style.width = '500px'
        document.querySelector('.head').style.height = '500px'

    }
        
    
}
