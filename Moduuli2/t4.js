// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

let lista = []
let numero = 1

while (numero !== 0) {
  numero = parseInt(prompt('Anna numero'));
  console.log(numero)
  lista.push(numero);
}

lista.sort((a, b) => (b - a))
console.log(lista)

let list = document.getElementById('htmllista');

for (let item of lista) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.append(li);
}
