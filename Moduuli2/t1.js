// Write a program that prompts the user for five numbers and prints them in
// the reverse order they were entered. Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.
let lista = [];
let listareverse = []
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt('Anna numero.'));
  lista.push(numero);

}

for (let i = lista.length - 1; i > -1; i--) {
  listareverse.push(lista[i]);
}


let list = document.getElementById('htmllista');

for (let item of listareverse) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.append(li);
}