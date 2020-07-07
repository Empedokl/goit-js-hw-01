"use strict";
let message;
let cost;
let userCountry;
userCountry = prompt("В какую страну сделать доставку?");
let answer = userCountry.toLocaleLowerCase();
if (userCountry === null) {
  message = "Отменено пользователем!";
  alert(message);
}

switch (answer) {
  case "китай":
    cost = 100;
    message = `Доставка в ${userCountry} будет стоить ${cost} кредитов`;
    alert(message);
    break;

  case "чили":
    cost = 250;
    message = `Доставка в ${userCountry} будет стоить ${cost} кредитов`;
    alert(message);
    break;

  case "австралия":
    cost = 170;
    message = `Доставка в ${userCountry} будет стоить ${cost} кредитов`;
    alert(message);
    break;

  case "индия":
    cost = 80;
    message = `Доставка в ${userCountry} будет стоить ${cost} кредитов`;
    alert(message);
    break;

  case "ямайка":
    cost = 120;
    message = `Доставка в ${userCountry} будет стоить ${cost} кредитов`;
    alert(message);
    break;

  default:
    message = "В вашей стране доставка не доступна";
    alert(message);
}
