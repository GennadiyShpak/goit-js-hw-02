'use strict';
let array;

const logItems = function (array) {
  array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems();
