"use strict";
let cost;
let userCountry;
userCountry = prompt("В какую страну сделать доставку?");
if (userCountry === null) {
  alert("Отменено пользователем!");
} else {
  let answer = userCountry.toLocaleLowerCase();
  switch (answer) { 
    case "китай":
      cost = 100;
      alert(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
      break;

    case "чили":
      cost = 250;
      alert(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
      break;

    case "австралия":
      cost = 170;
      alert(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
      break;

    case "индия":
      cost = 80;
      alert(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
      break;

    case "ямайка":
      cost = 120;
      alert(`Доставка в ${userCountry} будет стоить ${cost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
