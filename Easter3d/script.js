

window.onload = function() {
    const pyramid = document.querySelector('.model2');
    pyramid.play();
    setTimeout(() => {
        pyramid.pause();
    }, 5000);

    console.log(pyramid)
};





function handleScroll() {
    let scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollY);

    if (scrollY > 100) {
        document.querySelector('.model').play();
        setTimeout(() => {
            document.querySelector('.model').pause();
        }, 1600);

        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);

