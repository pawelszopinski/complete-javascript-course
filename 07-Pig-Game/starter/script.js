'use strict';
const rollBtn = document.querySelector('.btn--roll');
const diceResult = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');

// Initial phase
score0.textContent = 0;
score1.textContent = 0;
let playing = true;
let results = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceResult.classList.add('hidden');

const init = ()=>{
score0.textContent = 0;
score1.textContent = 0;
playing = true;
results = [0, 0];
currentScore = 0;
activePlayer = 0;
diceResult.classList.add('hidden');
}

// Function switch active player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling dice
rollBtn.addEventListener('click', () => {
  if (playing) {
    // Generating number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // Displaying number
    diceResult.src = `dice-${diceNumber}.png`;
    diceResult.classList.remove('hidden');

    // When result is 1 switch player
    if (diceNumber !== 1) {
      // Add dices
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch
      // change active player

      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    results[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      results[activePlayer];
    if (results[activePlayer] >= 10) {
      diceResult.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener("click", ()=> {

})
// let arr = [];
// let sum = 0;
// let activePlayer = 0;
// rollBtn.addEventListener('click', () => {
//   const diceNumber = Math.trunc(Math.random() * 6) + 1;
//   switch (diceNumber) {
//     case 1:
//       diceResult.src = 'dice-1.png';
//       switchActivePlayer();
//       break;
//     case 2:
//       diceResult.src = 'dice-2.png';
//       break;
//     case 3:
//       diceResult.src = 'dice-3.png';
//       break;
//     case 4:
//       diceResult.src = 'dice-4.png';
//       break;
//     case 5:
//       diceResult.src = 'dice-5.png';
//       break;
//     case 6:
//       diceResult.src = 'dice-6.png';
//       break;
//     default:
//       diceResult.src = 'dice-6.png';
//   }
//   if (diceNumber !== 1) {
//     arr.push(diceNumber);
//     sum += diceNumber;
//     currentScoreOne.textContent =
//       activePlayer === 0 ? sum : currentScoreOne.textContent;
//     currentScoreTwo.textContent =
//       activePlayer === 1 ? sum : currentScoreTwo.textContent;
//   }
// });

// holdBtn.addEventListener('click', () => {
//   scoreOne.textContent =
//     activePlayer === 0
//       ? Number(scoreOne.textContent) + sum
//       : scoreOne.textContent;
//   scoreTwo.textContent =
//     activePlayer === 1
//       ? Number(scoreTwo.textContent) + sum
//       : scoreTwo.textContent;
//   switchActivePlayer();
// });

// newBtn.addEventListener('click', () => {
//   scoreOne.textContent = 0;
//   scoreTwo.textContent = 0;
//   sum=0
//   let number = Math.random() > 0.5 ? playerOneSection : playerTwoSection;
// playerOneSection.classList.remove('player--active');
//   playerTwoSection.classList.remove('player--active');
//   number.classList.add('player--active')
//   currentScoreOne.textContent = '0';
//   currentScoreTwo.textContent = '0';
// });

// function switchActivePlayer() {
//   playerOneSection.classList.toggle('player--active');
//   playerTwoSection.classList.toggle('player--active');
//   sum = 0;
//   currentScoreOne.textContent = sum;
//   currentScoreTwo.textContent = sum;
//   activePlayer = 1 - activePlayer;
// }
