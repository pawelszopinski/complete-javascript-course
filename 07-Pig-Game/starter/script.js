'use strict';
const rollBtn = document.querySelector('.btn--roll')
const diceResult = document.querySelector('.dice')
let currentScoreOne = document.getElementById('current--0')
let arr = []
let sum = 0
rollBtn.addEventListener('click', ()=> {
   const diceNumber = Math.floor(Math.random()*6)+1
    switch (diceNumber) {
        case 1:
            diceResult.src = 'dice-1.png'
            break;
        case 2:
            diceResult.src = 'dice-2.png'
            break;
        case 3:
            diceResult.src = 'dice-3.png'
            break;
        case 4:
            diceResult.src = 'dice-4.png'
            break;
        case 5:
            diceResult.src = 'dice-5.png'
            break;
        case 6:
            diceResult.src = 'dice-6.png'
            break;
            default:
            diceResult.src = 'dice-6.png'
    }
    
  arr.push(diceNumber)

  sum+=diceNumber
    currentScoreOne.textContent = sum
 console.log(currentScoreOne.textContent);
})
