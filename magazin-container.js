window.addEventListener("resize", resize);
function resize(){
    if (screen.width > 767){
        document.getElementById("o2").classList.add('container');
    }
    if (screen.width <= 767){
        document.getElementById("o2").classList.remove('container');
    }
}