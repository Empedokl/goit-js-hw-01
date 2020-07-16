"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;
let userAnswer;
userAnswer = prompt("Сколько дроидов Вы хотите купить?");

if (userAnswer === null) {
  message = "Отменено пользователем!";
  alert(message);
}else {
totalPrice = userAnswer * pricePerDroid;
 if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
  alert(message);
} else {
  credits = credits - totalPrice;
  message = `Вы купили ${userAnswer} дроидов, на счету осталось ${credits} кредоитов`;
  alert(message);
}
}
