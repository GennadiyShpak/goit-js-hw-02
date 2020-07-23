"use strick";
const findLongestWord = function (string) {
  let text = string.split(" ");
  let biggestWord = text[0];

  for (let i = 1; i < text.length; i += 1) {
    if (biggestWord.length < text[i].length) {
      biggestWord = text[i];
    }
  }
  return console.log(biggestWord);
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
