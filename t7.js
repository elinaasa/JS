// Write a program that asks the user for the number of dice rolls.
// The program throws all the dice once and prints the sum of the numbers.

let nopat = parseInt(prompt('Anna noppien lukumäärä.'));
let summa = 0;
for (let i = 1; i <= nopat; i++) {
  (summa += Math.floor(Math.random() * 6) + 1);
}

document.querySelector('#p1').innerHTML = 'Noppien summa on ' + (summa);