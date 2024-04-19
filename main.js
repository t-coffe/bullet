import './style.css'

const random = document.getElementById('random');
const score = document.querySelector('p span');
const ranger = document.querySelector('input');



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


random.textContent = (getRandomInt(100));