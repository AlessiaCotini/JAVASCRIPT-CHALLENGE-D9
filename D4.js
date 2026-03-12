/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  let risultato = l1 * l2;
  console.log(risultato);
};
area(4, 2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (num1, num2) {
  let somma = num1 + num2;
  if (num1 === num2) {
    return somma * 3;
  } else {
    return somma;
  }
};
const risultato2 = crazySum(5, 5);
console.log(risultato2);
const risultato3 = crazySum(4, 2);
console.log(risultato3);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (num) {
  let differenza = num - 19;
  if (num > 19) {
    return Math.abs(differenza) * 3;
  } else {
    return Math.abs(differenza);
  }
};
const risultato4 = crazyDiff(5);
console.log(risultato4);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(350));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia 
 già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (stringa) {
  if (stringa.includes("EPICODE")) {
    return stringa;
  } else {
    return stringa + "EPICODE";
  }
};
console.log(epify("mammamia"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che
  il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (n) {
  if (n > 0 && n % 3 === 0 && n % 7 === 0) return n;
};
console.log(check3and7(21));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (stringa) {
  return stringa.split("").reverse().join("");
};
console.log(reverseString("kevin"));
console.log(reverseString("roberto"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (stringa) {
  return stringa
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(upperFirst("matteo va allo stadio con il cane"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova 
 stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (stringa) {
  return stringa.slice(1, -1);
};
console.log(cutString("aforzaromaa"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array 
 contenente n numeri casuali inclusi tra 0 e 10.
*/
const arr = [];
const giveMeRandom = function (n) {
  for (i = 0; i < n; i++) {
    let numeri = Math.floor(Math.random() * 11);
    arr.push(numeri);
  }
  console.log(arr);
};
giveMeRandom(17);

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let totaleNumeri = 0;
const checkArray = function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      totaleNumeri += arr[i];
      console.log("maggiore di 5");
    } else {
      console.log("minore di 5");
    }
  }
  console.log(totaleNumeri);
};
checkArray();

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  {
    price: 750,
    name: "iAru",
    id: 357,
    quantity: 8,
  },
];
const shoppingCartTotal = function () {
  let TotaleDovuto = shoppingCart[0].price * shoppingCart[0].quantity;
  console.log(TotaleDovuto);
};
shoppingCartTotal();
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti
  proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" 
 che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale 
 degli elementi.
*/
shoppingCart = [
  (firstPhone = {
    price: 546,
    name: "iAriel",
    id: 654,
    quantity: 23,
  }),
  (secondPhone = {
    price: 987,
    name: "iMarley",
    id: 159,
    quantity: 45,
  }),
];
const addToShoppingCart = function () {};

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
const loopUntil = function (n) {};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
