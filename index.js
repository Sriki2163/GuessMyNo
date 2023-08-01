'use strict';


let secretnumber = Math.floor(Math.random() * 20);

let score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {

    let highscore = Number(document.querySelector('.highscore').textcontent);

    const guess = Number(document.querySelector('.guess').value);

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
    }

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number ';
    } else if (guess === secretnumber) {
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '35rem';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('.message').textContent = 'Correct! Number 🧀';
    } else if (guess > secretnumber) {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too Low!';
    }
})

document.querySelector('.again').addEventListener('click', function () {

    secretnumber = Math.floor(Math.random() * 20);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
