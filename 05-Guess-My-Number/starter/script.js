'use strict';

let guessNumber = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
let input = document.querySelector('.guess');
let verdict = document.querySelector('.message');
let score = document.querySelector('.score');
const againBtn = document.querySelector('.again');
let highscore = document.querySelector('.highscore');
let number = Number(input.value)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function checkNumber() {
  if (number === secretNumber) {
    verdict.textContent = '🥳 👌 You made it. Well done';
    document.body.style.backgroundColor = '#60b347';
    guessNumber.textContent = secretNumber
    if (score.textContent > highscore.textContent) {
    highscore.textContent = score.textContent;
  }
  } else if (number < secretNumber) {
    verdict.textContent = '👆 Too low';
    score.textContent--;
  } else if (number > secretNumber) {
    verdict.textContent = '👇 Too high';
    score.textContent--;
  } else {
    verdict.textContent = '🚫 Pick a number';
  }
  if (score.textContent < 1) {
    verdict.textContent = '🎲 Game Over';
    score.textContent = '';
    btnCheck.disabled = true;
    document.body.style.backgroundColor = 'red';
  }
}

btnCheck.addEventListener('click', checkNumber);

againBtn.addEventListener('click', () => {
  btnCheck.disabled = false;
  rr = Math.trunc(Math.random() * 20) + 1;
  guessNumber.textContent = '?'
  input.value = null;
  verdict.textContent = 'Start guessing...';
  score.textContent = 20;
  document.body.style.backgroundColor = '#222';
});
