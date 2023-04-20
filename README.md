<style>

.tracking {
	animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}


@keyframes tracking{
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

p {
    font-family: 'Poppins', sans-serif;
    
}
</style>


<p class="tracking">Kelwin Projects</p>



