// JavaScript source code
document.querySelector('.gallery_1').addEventListener('click', move1);
document.querySelector('.gallery_2').addEventListener('click', move2);
document.querySelector('.gallery_3').addEventListener('click', move3);
let a = 0;
function move1() {
    document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery-1');
    a = 0;
}
function move2() {
    document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery-2');
    a = 1;
}
function move3() {
    document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
    document.getElementById("o1").classList.add('gallery-3');
    a = 2;
}
window.onload = function() {
    document.querySelector('.gallery-1').addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){
            document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
            document.getElementById("o1").classList.add('gallery-3'); 
            a=2;
        }
        if (a==0){
            document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
            document.getElementById("o1").classList.add('gallery-2'); 
            a=1;
        }
        console.log(a);
    });

    document.querySelector('.gallery-1').addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){
            document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
            document.getElementById("o1").classList.add('gallery-1'); 
            a=0;
        }
        if (a==2){
            document.getElementById("o1").classList.remove('gallery-1', 'gallery-2', 'gallery-3');
            document.getElementById("o1").classList.add('gallery-2'); 
            a=1;
        }
        console.log(a);
    });
}