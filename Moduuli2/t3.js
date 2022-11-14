// Write a program that asks for the names of six dogs. The program prints
// dog names to unordered list <ul> in reverse alphabetical order.

let lista = [];
let listareverse = [];

for (let i = 0; i < 6; i++) {
  let nimi = prompt('Anna koiran nimi.');
  lista.push(nimi);
  lista.sort();
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