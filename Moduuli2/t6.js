// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters. Write a main program that rolls
// the dice until the result is 6. The main program should print out the result
// of each roll in an unordered list (<ul>). (2p)

lista = []

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

let roll = rollDice()

while (roll !== 6) {
  lista.push(roll)
  roll = rollDice()
}

lista.push(roll)

let list = document.getElementById('htmllista');

for (let item of lista) {
  let li = document.createElement('li');
  li.innerHTML = item;
  list.append(li);
}