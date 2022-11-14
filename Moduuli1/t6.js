/* Write a program that prints the text "Should I calculate the square root?"
in a confirmation window. If the user selects OK, the program asks for the
number and calculates and prints its square root to the HTML document.
If the user selects Cancel, the program prints the text "The square root is not
calculated." to the HTML document (3p) */

const answer = confirm('Laskenko neliöjuuren?');

if (answer === true) {
  const num = parseInt(prompt('Anna numero.'));
  if (num > 0) {
    document.querySelector('#p1').innerHTML = 'Luvun ' + (num) +
        ' neliöjuuri on ' + Math.sqrt(num) + '.';
  } else document.querySelector(
      '#p1').innerHTML = 'Neliöjuurta ei voitu laskea.';

} else document.querySelector(
    '#p1').innerHTML = 'Neliöjuurta ei laskettu.';
