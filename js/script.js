/*
*Descrizione:*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. (Per favorire il lavoro vostro e dei tutor mettete inizialmente un timer di 5-10 sec e non 30)
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*NOTA*: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*BONUS:*
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
 */

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
let timer = 10;
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

// 3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

//4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
/* const userNum = [];
const result = document.querySelector(".result"); */

//5.se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.

//6.Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
