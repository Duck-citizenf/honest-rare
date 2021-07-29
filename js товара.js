// JavaScript source code

document.querySelector('.gallery-button').addEventListener('click', move);
function move() {
    document.getElementById("o1").classList.add('gallery-moving');
    document.getElementById("o1").classList.remove('gallery');
}