// Write a program that prompts the user for numbers. When the user enters one
// of the numbers he previously entered, the program will announce that the number
// has already been given and stops its operation and then prints all the given
// numbers to the console in ascending order. (2p)
let lista = [];
let numero = 0;

while (numero === 0) {
  let int = parseInt(prompt('Anna numero.'));
  if (lista.includes(int)){
    alert('Numero on jo syötetty.');
    numero = 1;
  }
  else{
    lista.push(int);
  }
}

lista.sort(function(a, b){return a-b});

for (let i = 0; i < lista.length; i++){
  console.log(lista[i]);
}