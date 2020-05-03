//select images
let animation = document.querySelector('.ease');
let img1 = document.querySelector('li:nth-child(1)');
let img2 = document.querySelector('li:nth-child(2)');
let img3 = document.querySelector('li:nth-child(3)');
let img4 = document.querySelector('li:nth-child(4)');
let song1 = document.querySelector('#song1');
let song2 = document.querySelector('#song2');
let song3 = document.querySelector('#song3');
let song4 = document.querySelector('#song4');

//play pause 
img1.addEventListener('click', function() {
    if(song1.paused) {
        song1.play();
        song2.pause();
        song3.pause();
        song4.pause();
        this.classList.toggle('ease');
        img2.classList.remove('ease');
        img3.classList.remove('ease');
        img4.classList.remove('ease');
    } else {
        song1.pause();
        this.classList.remove('ease');
    }
});

img2.addEventListener('click', function() {
    if(song2.paused) {
        song2.play();
        song1.pause();
        song3.pause();
        song4.pause();
        this.classList.toggle('ease');
        img1.classList.remove('ease');
        img3.classList.remove('ease');
        img4.classList.remove('ease');
    } else {
        song2.pause();
        this.classList.remove('ease');
    }
});

img3.addEventListener('click', function() {
    if(song3.paused) {
        song3.play();
        song1.pause();
        song2.pause();
        song4.pause();
        this.classList.toggle('ease');
        img1.classList.remove('ease');
        img2.classList.remove('ease');
        img4.classList.remove('ease');
    } else {
        song3.pause();
        this.classList.remove('ease');
    }
});

img4.addEventListener('click', function() {
    if(song4.paused) {
        song4.play();
        song1.pause();
        song2.pause();
        song3.pause();
        this.classList.toggle('ease');
        img1.classList.remove('ease');
        img2.classList.remove('ease');
        img3.classList.remove('ease');
    } else {
        song4.pause();
        this.classList.remove('ease');
    }
});

  





