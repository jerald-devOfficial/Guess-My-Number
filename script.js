'use strict';

/* console.log(document.querySelector('.message').textContent);
// to show the text content from an element
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(20);
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  // when there is no input
  if (!guess) {
    /* if some result would be like 0 or falsy value */
    if (score > 0) {
      displayMessage('⛔️ No number!');
      document.querySelector('.score').textContent = score--;
    } else {
      displayMessage('💥 You lost the game');
    }
    // When player wins
  } else if (guess === secretNumber) {
    //   document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = `#60b347`;
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number! 🎉');

    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? guess > 20
            ? 'Highest number is 20 '
            : '📈 Too high '
          : guess < 0
          ? 'Lowest number is 1 '
          : '📉 Too low '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  /* // When number is too high
  else if (guess > secretNumber) {
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
  } */
});

/* document.querySelector('.again').addEventListener('click', () => {
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
}); */

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = `#222`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
