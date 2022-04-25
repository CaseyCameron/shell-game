import { resetShells, revealBall } from './utils/utils.js';

// import functions and grab DOM elements
const shellButton1 = document.getElementById('shell-1-button');
const shellButton2 = document.getElementById('shell-2-button');
const shellButton3 = document.getElementById('shell-3-button');
const buttons = [shellButton1, shellButton2, shellButton3];

const ball1Ele = document.getElementById('ball-1');
const ball2Ele = document.getElementById('ball-2');
const ball3Ele = document.getElementById('ball-3');
const containers = [ball1Ele, ball2Ele, ball3Ele];

const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('losses');
const total = document.getElementById('total');

// let state
const hidingPlaces = ['ball-1', 'ball-2', 'ball-3'];
let correctGuesses = 0;
let totalGuesses = 0;

// set event listeners

buttons.map((button, index) => {
    button.addEventListener('click', () => {
        const hidingSpot = Math.floor(Math.random() * 3);
        const answer = hidingPlaces[hidingSpot];
        handleGuess(answer, `ball-${index + 1}`);
    });
});

function handleGuess(answer, guess) {
    resetShells(containers);
    revealBall(containers, answer);

    totalGuesses++;
    if (guess === answer) {
        correctGuesses++;
        totalWins.textContent = `${correctGuesses}`;
    } else {
        totalLosses.textContent = `${totalGuesses - correctGuesses}`;
    }
    total.textContent = `${totalGuesses}`;
}
