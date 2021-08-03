// JavaScript source code
document.querySelector('.gallery_1').addEventListener('click', move1);
document.querySelector('.gallery_2').addEventListener('click', move2);
document.querySelector('.gallery_3').addEventListener('click', move3);
function move1() {
    document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery');
}
function move2() {
    document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery-2');
}
function move3() {
    document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery-3');
}