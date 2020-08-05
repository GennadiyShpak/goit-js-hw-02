'use strict';
const findLongestWord = function (string) {
  const text = string.split(' ');
  let biggestWord = '';
  for (let word of text) {
    if (biggestWord.length < word.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you'));
