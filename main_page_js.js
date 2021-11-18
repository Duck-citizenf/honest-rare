// JavaScript source code
let a = 0;
document.querySelector('.gallery_1').addEventListener('click', move1);
function move1() {
    if(a == 0){
        document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery-2');
        a = 1;
    }
    else if(a == 1){
        document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery-3');
        a = 2;
    }
    else if(a == 2){
        document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery');
        a = 0;
    }
}