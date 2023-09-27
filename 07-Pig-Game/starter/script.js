'use strict';
const rollBtn = document.querySelector('.btn--roll');
const diceResult = document.querySelector('.dice');
let currentScoreOne = document.getElementById('current--0');
let currentScoreTwo = document.getElementById('current--1');
let playerOneSection = document.querySelector('.player--0');
let playerTwoSection = document.querySelector('.player--1');

let arr = [];
let sum = 0;
let activePlayer = 0;
rollBtn.addEventListener('click', () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  switch (diceNumber) {
    case 1:
      diceResult.src = 'dice-1.png';
      switchActivePlayer()
      break;
    case 2:
      diceResult.src = 'dice-2.png';
      break;
    case 3:
      diceResult.src = 'dice-3.png';
      break;
    case 4:
      diceResult.src = 'dice-4.png';
      break;
    case 5:
      diceResult.src = 'dice-5.png';
      break;
    case 6:
      diceResult.src = 'dice-6.png';
      break;
    default:
      diceResult.src = 'dice-6.png';
  }
if(diceNumber!==1){
  arr.push(diceNumber);
  sum += diceNumber;
  currentScoreOne.textContent = activePlayer === 0 ? sum : currentScoreOne.textContent;
  currentScoreTwo.textContent = activePlayer === 1 ? sum : currentScoreTwo.textContent;
}
});
  



function switchActivePlayer() {
playerOneSection.classList.toggle('player--active')
playerTwoSection.classList.toggle('player--active')
sum = 0;
currentScoreOne.textContent = sum;
currentScoreTwo.textContent = sum
activePlayer = 1 - activePlayer; 
}

