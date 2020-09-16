let tries = 0;

const functions = {
  // Checks the chosen word array
  winningWord: (list) => {
    const index = Math.floor(Math.random() * list.length);
    return list[index].split("");
  },

  // Checks if letter exits in chosen word
  letterInput: (testWord, testLetter) => {
    let letterGuessed = false;
    if (testWord.includes(testLetter)) {
      letterGuessed = true;
    }
    return letterGuessed;
  },

  // Checks the updates of guess attempts
  attemptsCheck: (wrongGuessedLetter, wordToTest) => {
    const validatedValue = functions.letterInput(
      wordToTest,
      wrongGuessedLetter
    );
    if (validatedValue) {
      return;
    } else {
      tries++;
      return false;
    }
  },

  // Checks letter added to the array
  guessedLetters: (word, inputs) => {
    const wrongLetters = inputs.filter((letter) => {
      return !word.includes(letter);
    });
    return wrongLetters;
  },

  // Checks win or lose
  checkLosing: (tries) => {
    if (tries === 5) {
      return true;
    } else {
      return false;
    }
  },

  // Checks winning the game
  checkWinning: (word, inputs) => {
    let remaining = word.filter((letter) => {
      return !inputs.includes(letter);
    });
    if (remaining.length === 0) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = functions;
