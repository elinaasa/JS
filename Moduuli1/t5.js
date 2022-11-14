// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year.
// A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are
// also divisible by 400. Print the result on the HTML document.
const vuosi = parseInt(prompt('Anna vuosi'));

if (vuosi % 4 === 0 && !(vuosi % 100 === 0) || (vuosi % 400 === 0)) {
  document.querySelector('#p1').innerHTML = 'Vuosi on karkausvuosi.';

} else document.querySelector('#p1').innerHTML = 'Vuosi ei ole karkausvuosi.';