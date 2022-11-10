// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)

const num1 = prompt('Anna ensimmäinen numero.');
const num2 = prompt('Anna toinen numero.');
const num3 = prompt('Anna kolmas numero.');

console.log(num1, num2, num3);

const int1 = parseInt(num1);
const int2 = parseInt(num2);
const int3 = parseInt(num3);

console.log(int1 + int2 + int3);
console.log(int1 * int2 * int3);
console.log((int1 + int2 + int3) / 3);

document.querySelector('#p1').innerHTML = 'Lukujen summa on ' + (int1 + int2 + int3) + ' tulo on ' + (int1 * int2 * int3) + ' ja keskiarvo on ' + ((int1 + int2 + int3) / 3) + '.';