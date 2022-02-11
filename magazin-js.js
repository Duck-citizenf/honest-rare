// JavaScript source code
let a = 0;
document.querySelector('.menu__target').addEventListener('click', move1);
var o1 = document.getElementById("o1");
function move1() {
    o1.classList.remove('gallery', 'gallery-2');
    if(a == 0){
        o1.classList.add('gallery-2');
        a = 1;
    }
    else if(a == 1){
        o1.classList.add('gallery');
        a = 0;
    }
}