"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userPassword;
userPassword = prompt("Enter your password");
if (userPassword === null) {
  message = "Отменено пользователем!";
  alert(message);
}
 else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  alert(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  alert(message);
}
