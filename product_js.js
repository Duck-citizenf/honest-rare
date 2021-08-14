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
let a = 0;
window.onload = function() {
    document.querySelector('.gallery').addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==0){document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery-2');}
        if (a==1){document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery-3');}
        a +=1;
    });

    document.querySelector('.gallery').addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);
        console.log(e.detail);
        if (a==1){document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery');}
        if (a==2){document.getElementById("o1").classList.remove('gallery', 'gallery-2', 'gallery-3');
        document.getElementById("o1").classList.add('gallery-2');}
        a +=-1;
    });
}