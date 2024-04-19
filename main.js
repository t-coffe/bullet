import './style.css'

const random = document.getElementById('random');
const score = document.querySelector('p span');
const ranger = document.querySelector('input');
const start = document.getElementById('start');
const check = document.getElementById('check');

let win = 0;
score.textContent = win;
let stock = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

stock = parseInt(getRandomInt(100));
random.textContent = stock;


check.addEventListener('click', ()=> {
  if (1 === ranger.value) {
    win += 200;
  } else if (stock - ranger.value < 5 && stock - ranger.value > -5) {
    win += 100;
  } else {
    alert('too bad');
  }
  score.textContent = win;
  stock = parseInt(getRandomInt(100));
  random.textContent = stock;
})




