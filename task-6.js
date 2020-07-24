"use strict";
let input;
let total = 0;
while (true) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  const checkNumber = Number.isNaN(input);
  if (checkNumber) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total = total + input;
  }
}
alert(`Общая сумма чисел равна ${total}`);
