// 1. Creo un array di 5 numeri casuali
let rdmNum = [];
let numberElement = document.getElementById("numbers-list");
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rdmN() {
  while (rdmNum.length < 5) {
    let num = randomNumber(0, 100);
    if (!rdmNum.includes(num)) {
      rdmNum.push(num);
    }
  }
  showNum();
}

let showNum = () => {
  for (let i = 0; i < rdmNum.length; i++) {
    let elementNumbers = document.createElement("li");
    elementNumbers.innerHTML = rdmNum[i];
    numberElement.appendChild(elementNumbers);
  }
};
rdmN();
// 2. Creo timer
// 3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
let timer = 5;
let countdownElement = document.getElementById("countdown");
let intervalId = setInterval(() => {
  if (timer > 0) {
    countdownElement.innerHTML = timer--;
  } else {
    numberElement.classList.toggle("hidden");

    const formElement = document.getElementById("answers-form");
    formElement.classList.toggle("d-none");

    clearInterval(intervalId);
  }
}, 1000);

//4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const userNum = [];
let duplicatedNum = false;
let submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  let inputElementList = document.querySelectorAll("input");
  for (let i = 0; i < inputElementList.length; i++) {
    if (rdmNum.includes(parseInt(inputElementList[i].value))) {
      if (userNum.includes(parseInt(inputElementList[i].value))) {
        document.getElementById("message").innerHTML =
          "Trovati numeri duplicati";
        duplicatedNum = true;
        break;
      } else {
        userNum.push(parseInt(inputElementList[i].value));
      }
    }
  }

  let form = document.getElementById("answers-form");
  let prova = document.createElement("p");
  prova.innerHTML = `hai indovinato ${userNum.length} numeri, i numeri indovinati sono: ${userNum}`;
  form.appendChild(prova);
  prova = document.classList.add("texr-center");

  /* let print = document.getElementById("message");
  print.innerHTML = `hai indovinato ${userNum.length} numeri, i numeri indovinati sono: ${userNum}`; */
}
//5.se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.

//6.Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
