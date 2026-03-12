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
    let numeri = Math.ceil(Math.random() * 10);
    arr.push(numeri);
  }
};
giveMeRandom(5);
console.log(arr);
