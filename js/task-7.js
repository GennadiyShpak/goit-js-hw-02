const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login;
let valid;
let unique;

/* ПРОВЕРКА НА ВАЛИДНОСТЬ */
const isLoginValid = function (login) {
  const input = login.split('');
  valid = input.length > 16 || input.length < 4 ? false : true;
  return valid;
};

// /* ПРОВЕРКА НА УНИКАЛЬНОСТЬ*/
const isLoginUnique = function (allLogins, login) {
  unique = logins.includes(login) ? false : true;
  return unique;
};

const addLogin = function (allLogins, login) {
  isLoginValid(login);
  isLoginUnique(allLogins, login);
  if (!valid) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!unique) {
    return 'Такой логин уже используется!';
  }
  return 'Логин успешно добавлен!';
};

//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
