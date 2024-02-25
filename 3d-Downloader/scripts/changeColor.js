export default function changeColor() {

    const colorRed = document.querySelector('.red')
    const colorPink = document.querySelector('.pink')
    const colorBlue = document.querySelector('.blue')
    const Model = document.querySelector('.model')
    const Colors = document.querySelectorAll('.color')


    function changeModelAndColor(color, modelSrc) {
        console.log(`Clicou em ${color}`);

        Model.classList.add("animation")
        Colors.forEach((i) => {
            i.classList.remove('active-color');
        });
        document.getElementById(`color${color}`).classList.add('active-color');
        setTimeout(() => {

            Model.setAttribute('src', modelSrc);
        }, 350)

        setTimeout(() => {
            Model.classList.remove("animation")
        }, 500)
    }

    colorRed.addEventListener('click', () => {
        changeModelAndColor('red', './Imgs/donutred.glb');
    });

    colorPink.addEventListener('click', () => {
        changeModelAndColor('pink', './Imgs/donutrose.glb');
    });

    colorBlue.addEventListener('click', () => {
        changeModelAndColor('blue', './Imgs/donutblue.glb');
    });
}