import './style.css'

const random = document.getElementById('random');
const score = document.querySelector('p span');
const ranger = document.querySelector('input');
const start = document.getElementById('start');
const check = document.getElementById('check');

const win = 0;
score.textContent = win;
const stock = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

start.addEventListener('click', ()=> {
  stock = parseInt(getRandomInt(100));
  console.log(stock);
  random.textContent = stock;
  console.log(random);
})


check.addEventListener('click', ()=> {
  let compare = parseInt(random.textContent);
  console.log(compare);
  if (1 === ranger.value) {
    win += 200;
  } else if (compare - ranger.value < 5 && compare - ranger.value > -5) {
    win += 100;
  } else {
    alert('too bad');
  }
})




