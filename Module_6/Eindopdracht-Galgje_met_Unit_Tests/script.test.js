const { wordPicker, wordGuessed, guessLetter, showCurrentWord } = require('./script');

// 1: starten van de game d.m.v. het kiezen van het woord 

test('Is a word from wordList-array selected?', () => {
  let random = Math.floor(Math.random() * allWords.length);
  expect(wordPicker(allWords)).toContain(allWords[random]);
  expect(wordPicker(allWords)).not.toContain(allWords[random]);
});

// 2: checken of een letter voorkomt in het woord 

test('Does word contain the letter?', () => {
  let word = ["m","o","e","d","e","r"]
  let input = "m";
  let input1 = "a";
  expect(guessLetter(word, input)).toBeFalsy();
  expect(guessLetter(word, input1)).toBeTruthy();  
})

// 3: updaten van het aantal pogingen van de gebruiker

test('Update number of tries', () => {
  let tries = 0;
  let input= "q";
  let word = ["s","n","o","e","r"];
  expect(guessLetter(word, input)).toBeFalsy();
  expect(tries).toEqual(1);
})

// 4: updaten van de lijst met letters die al geraden zijn door de gebruiker

test('Update guessed letters', () => {
  let word = ["t","e","l","e","f","o","o","n"];
  let inputLetterWords=["t","y","o"];
  let letter = "x";
  expect(showCurrentWord(word, inputLetterWords).toBeFalsy());
})
   
// 5: verliezen van de game wanneer er geen pogingen meer over zijn
     
test('Game lost', () => {
  let tries;
  let inputs = ["b", "q", "e", "s", "p"];
  let word = ["t", "o", "e", "t", "e", "r"];
  expect(wordGuessed(word,inputs)).toBeFalsy();
  expect(tries).toEqual(6);
})

// 6: winnen van de game

test('Game won', () => {
  const inputs = ["d", "e", "v", "e", "l", "o", "p", "e","r"];
  const inputs2 = ["d", "e", "v", "e", "l", "o", "p"]
  const word = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];
  expect(wordGuessed(word,inputs)).toBeTruthy();
  expect(wordGuessed(word,inputs2)).toBeFalsy();
})

   

