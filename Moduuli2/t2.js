// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page
// in an ordered list (<ol>) in alphabetical order. (2p)

let lista = [];

let osallistujat = parseInt(prompt('Anna osallistujien lukumäärä.'));

for (let i = 0; i < osallistujat; i++) {
  let nimi = prompt('Anna osallistujan nimi.');
  lista.push(nimi)
  lista.sort();

}
console.log(lista)

let list = document.getElementById('htmllista');

for (let item of lista) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.append(li);
}
