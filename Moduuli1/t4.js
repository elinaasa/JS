// In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of
// Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and
// Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him.
// If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw."
let nimi = prompt('Anna nimesi.');
let num = Math.floor(Math.random()*4)+1;

console.log(num);

if (num === 1) {
    document.querySelector('#p1').innerHTML = nimi + ', you are Gryffindor.';
}

if (num === 2) {
    document.querySelector('#p1').innerHTML = nimi + ', you are Slytherin.';
}

if (num === 3) {
    document.querySelector('#p1').innerHTML = nimi + ', you are Hufflepuff.';
}

if (num === 4) {
    document.querySelector('#p1').innerHTML = nimi + ', you are Ravenclaw.';
}