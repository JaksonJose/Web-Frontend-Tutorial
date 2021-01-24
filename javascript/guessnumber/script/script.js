'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber)

let displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const userNumber = Number(document.querySelector('.guess').value);
    
    // When there is no input or input is zero;
    if (!userNumber){
       displayMessage('⛔ Not a Number!');

       // when player wins -> the user guess the secret number;
    } else if (userNumber === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } else {
            highScore += score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When player guess wrong
    } else if(userNumber != secretNumber){
        if (score > 1){
            displayMessage(userNumber > secretNumber ? '📈 Too high!': '📉 Too low!');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

///when player click on Play Again Button
document.querySelector('.again').addEventListener('click', () => {
    score = score + 3;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// When player click on New Game, it's Refreshed the webpage
document.querySelector('.new-game').addEventListener('click', () => location.reload());