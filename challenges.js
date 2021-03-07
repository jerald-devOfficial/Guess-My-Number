'use strict';

/* let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(20);

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  // when there is no input
  if (!guess) {
    //  if some result would be like 0 or falsy value 
    if (score > 0) {
      document.querySelector('.message').textContent = '⛔️ No number!';
      document.querySelector('.score').textContent = score--;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
    }
    // When player wins
  } else if (guess === secretNumber) {
    //   document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = `#60b347`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    score = 20;
    document.querySelector('.score').textContent = score;
    // When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      if (guess > 20) {
        document.querySelector('.message').textContent =
          'Highest number is 20 ';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        score--;
        document.querySelector('.message').textContent = '📈 Too high ';
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // When number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      if (guess < 0) {
        score--;
        document.querySelector('.message').textContent = 'Lowest number is 1 ';
        document.querySelector('.score').textContent = score;
      } else {
        score--;
        document.querySelector('.message').textContent = '📉 Too low ';
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
}); */

/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler 2. In the handler function,restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original backgroundcolor (#222) and number width(15rem) */

/* document.querySelector('.again').addEventListener('click', () => {
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
}); */

/* document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = `#222`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}); */
