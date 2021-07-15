'use strict';
const bd = document.querySelector('body');
bd.onload = function () {
  alert(
    'How to play the Rolling Dice: Each player continues to roll dice unitl they get a 1 which kills their current score, or push hold which adds current score to their total score,To win they must reach 100 points on their total score: Good Luck High Rollers!'
  );
};
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const buttonNew = document.querySelector('.btn--new');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');
const roll = document.querySelector('.btn--roll');
var dice = document.querySelector('.dice');
let hold = document.querySelector('.btn--hold');
let playing = true;
var value1 = 0;
var total1 = 0;
var total2 = 0;
var value2 = 0;
score1.textContent = 0;
score2.textContent = 0;
current1.textContent = 0;
current2.textContent = 0;

let rollDice = function () {
  if (playing) {
    let value = Math.trunc(Math.random() * 6) + 1;
    if (value === 1) {
      dice.src = 'dice-1.png';
      if (player1.classList.contains('player--active')) {
        value1 = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        current1.textContent = 0;
      } else if (!player1.classList.contains('player--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        current2.textContent = 0;
        value2 = 0;
      }
    }
    if (value === 2) {
      dice.src = 'dice-2.png';
      if (player1.classList.contains('player--active')) {
        value1 = value1 + value;
        current1.textContent = value1;
      } else {
        value2 = value2 + value;
        current2.textContent = value2;
      }
    }
    if (value === 3) {
      dice.src = 'dice-3.png';
      if (player1.classList.contains('player--active')) {
        value1 = value1 + value;
        current1.textContent = value1;
      } else {
        value2 = value2 + value;
        current2.textContent = value2;
      }
    }
    if (value === 4) {
      dice.src = 'dice-4.png';
      if (player1.classList.contains('player--active')) {
        value1 = value1 + value;
        current1.textContent = value1;
      } else {
        value2 = value2 + value;
        current2.textContent = value2;
      }
    }
    if (value === 5) {
      //   console.log(dice.src)
      dice.src = 'dice-5.png';
      if (player1.classList.contains('player--active')) {
        value1 = value1 + value;
        current1.textContent = value1;
      } else {
        value2 = value2 + value;
        current2.textContent = value2;
      }
    }
    if (value === 6) {
      dice.src = 'dice-6.png';
      if (player1.classList.contains('player--active')) {
        value1 = value1 + value;
        current1.textContent = value1;
      } else {
        value2 = value2 + value;
        current2.textContent = value2;
      }
    }
  }
};
hold.addEventListener('click', function () {
  if (playing) {
    if (player1.classList.contains('player--active')) {
      total1 = total1 + value1;
      score1.textContent = total1;
      if (total1 >= 20) {
        dice.src = 'dice0.jpg';
        player1.classList.add('player--winner');
        playing = false;
      }
      value1 = 0;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      total2 = total2 + value2;
      score2.textContent = total2;
      if (total2 >= 20) {
        dice.src = 'dice0.jpg';
        player2.classList.add('player--winner');
        playing = false;
      }
      value2 = 0;
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
  }
});
buttonNew.addEventListener('click', function () {
  playing = true;
  value1 = 0;
  total1 = 0;
  total2 = 0;
  value2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  dice.src = 'dice0.jpg';
});
roll.addEventListener('click', rollDice);
