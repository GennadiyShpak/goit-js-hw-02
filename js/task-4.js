'use strict';
let phrase;
const formatString = function (string) {
  phrase =
    string.split('').length > 40
      ? `${string.split('').slice(1, 39).join('')}...`
      : string;
  return phrase;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
