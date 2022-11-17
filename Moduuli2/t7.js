// Modify the function above so that it gets the number of sides on the dice as
// a parameter. With the modified function you can for example roll a 21-sided
// role-playing dice. The difference to the last exercise is that the dice
// rolling in the main program continues until the program gets the maximum
// number on the dice, which is asked from the user at the beginning. (2p)

function rollDie(tahkot) {
  return Math.ceil(Math.random() * tahkot);
}

function playgame(tahkot) {
  let resultselem = document.getElementById('results');
  let ulelem = document.createElement('ol');
  resultselem.append(ulelem);

  let dievalue = -1;

  while (dievalue !== tahkot) {
    dievalue = rollDie(tahkot);
    console.log(dievalue);
    const lielem = document.createElement('li');
    lielem.innerText = 'Heiton tulos ' + dievalue;
    ulelem.append(lielem);

  }
}

const diesize = parseInt(prompt('Kuinka monta tahkoa nopalla on?'));
playgame(diesize);