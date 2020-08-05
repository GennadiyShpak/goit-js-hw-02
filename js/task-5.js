'use strict';

const checkForSpam = function (message) {
  let text = message.toLowerCase();
  console.log(text);
  const spam = ['sale', 'spam'];
  return text.includes(spam[0]) || text.includes(spam[1]);
};
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
