// JavaScript source code
let a = 0;
document.querySelector('.menu__target').addEventListener('click', move1);
function move1() {
    if(a == 0){
        document.getElementById("o1").classList.remove('gallery', 'gallery-2');
        document.getElementById("o1").classList.add('gallery-2');
        a = 1;
    }
    else if(a == 1){
        document.getElementById("o1").classList.remove('gallery', 'gallery-2');
        document.getElementById("o1").classList.add('gallery');
        a = 0;
    }
}