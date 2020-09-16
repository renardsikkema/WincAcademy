const functions = require("./functions.js");

// Checks the chosen word array
test("Checks the chosen word array", () => {
  testArray = ["test"];
  expect(functions.winningWord(testArray)).toEqual(["t", "e", "s", "t"]);
});

// Checks if letter exits in chosen word
test("Checks if letter exits in chosen word", () => {
  testWord = ["t", "e", "s", "t"];
  testLetter = "t";
  expect(functions.letterInput(testWord, testLetter)).toEqual(true);
});

test("Checks if letter does not exits in chosen word", () => {
  testWord = ["t", "e", "s", "t"];
  testLetter = "x";
  expect(functions.letterInput(testWord, testLetter)).toEqual(false);
});

// Checks the updates of guess attempts
test("Checks the updates of guess attempts", () => {
  const wrongGuessedLetter = "z";
  const wordToTest = ["t", "e", "s", "t"];
  expect(functions.attemptsCheck(wrongGuessedLetter, wordToTest)).toEqual(
    false
  );
});

// Checks letter added to the array
test("Checks letter added to the array", () => {
  word = ["t", "e", "s", "t"];
  inputs = ["t", "e", "s", "n"];
  expect(functions.guessedLetters(word, inputs)).toEqual(["n"]);
});

// Checks win or lose
test("Checks if losing is true when no more attempts left", () => {
  let tries = 5;
  expect(functions.checkLosing(tries)).toEqual(true);
});

test("Checks if losing is false with 1 attempt left", () => {
  let tries = 4;
  expect(functions.checkLosing(tries)).toEqual(false);
});

// Checks winning the game
test("Checks winning the game", () => {
  const word = ["t", "e", "s", "t"];
  const winningArray = ["t", "e", "s", "t"];
  expect(functions.checkWinning(word, winningArray)).toEqual(true);
});

test("Check win condition returns as false when word is not completed", () => {
  const word = ["t", "e", "s", "t"];
  const winningArray = ["t", "e", "t"];
  expect(functions.checkWinning(word, winningArray)).toEqual(false);
});
