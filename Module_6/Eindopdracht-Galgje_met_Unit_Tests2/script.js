const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
let maxAmount = 5;

let word;
const winningWord = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

let inputs;
const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

const clearInput = function () {
  document.querySelector("input").value = "";
};

let gameOver;
const winGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const loseGame = function () {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const chosenWord = function (word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

let tries = 0;
const attemptsCheck = function (tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessedLetters = function () {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winGame();
  } else if (tries >= 5) {
    loseGame();
  }
};

function getPlayer(player) {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
}

function beginGame(player1) {
  getPlayer(player1);
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = winningWord(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessedLetters);
  document.querySelector(".restart").addEventListener("click", beginGame);
  beginGame();
});
