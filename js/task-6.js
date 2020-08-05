'use strict';
let total = 0;
let input;
let result;
const sum = function (input) {
  do {
    input = prompt('Введите число');

    if (input === null) {
      alert('Отменено пользователем');
      console.log(total);
      break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
    total += input;
  } while (true);
};

sum();
