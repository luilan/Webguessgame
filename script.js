'use strict';

let numberInput = document.querySelector(".guess")
let button = document.querySelector(".check")
let again = document.querySelector(".again")


let message = document.querySelector('.message')

let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')
let myNumberUI = document.querySelector('.number')

let currentGuess = 0
let myNumber = getRndInt(1, 20)

function updateScore(value) {
  let scoreV = Number(score.innerHTML)
  scoreV += value
  score.innerHTML = scoreV
}

function getGuess() {
  currentGuess = numberInput.value
  if (currentGuess < myNumber) {
    message.innerHTML = "too low"
    updateScore(-1)
  }
  else if (currentGuess > myNumber) {
    message.innerHTML = "too high"
    updateScore(-1)
  }
  else {
    message.innerHTML = "Right"
    myNumberUI.innerHTML = currentGuess
    setHighscore()
  }
}

function setHighscore() {
  let value = Number(score.innerHTML)
  let highscoreV = Number(highscore.innerHTML)
  if (highscoreV < value) {
    highscore.innerHTML = value
  }
}

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function resetGame() {
  score.innerHTML = 20
  numberInput.value = null
  message.innerHTML = "Start guessing..."
  myNumberUI.innerHTML = "?"
}

button.addEventListener('click', getGuess)
again.addEventListener('click', resetGame)