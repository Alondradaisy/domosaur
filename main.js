const span = document.querySelector('.mess-with-me');
span.style.fontSize = '40px';

const para = document.querySelector('p.mess-with-me');
para.style.backgroundColor = 'green'; 

const dinoImg = document.querySelector('#hide-me');
dinoImg.style.display = 'none';

const firstDino = document.querySelector('#triceratops');
firstDino.style.fontSize = '324px';

function toOrange() {
    span.style.backgroundColor = 'orange';
}
span.addEventListener('click', toOrange);

function redBorder() {
    dinoImg.style.border = 'red solid 2px';
}
dinoImg.addEventListener('click' redBorder);




