AOS.init();

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByTagName("nav")[0].style.top = "0px"
    }else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){

    if(semaforo) {
        document.querySelectorAll(".hamburger")[0].style.color = "#000000";
        semaforo = false;
    }else {
        document.querySelectorAll(".hamburger")[0].style.color = "#000000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos")
})