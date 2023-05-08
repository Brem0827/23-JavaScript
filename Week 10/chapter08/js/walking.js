const result = document.querySelector("#result");
const firsdDay = newDate("1972-11-21");
const today = new Date();

let passedTime = today.getTime() - firsdDay.getTime();

let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

result.innerText = passedDay;