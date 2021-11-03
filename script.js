const neighbour = 1;
if (neighbour === 18) console.log('You just became an adult :D (strict)');

if (neighbour == 1) console.log('You just became an adult :D (loose)');

const numneighbours = prompt("'How many neighbour countries does your country have?");
console.log(numneighbours);
console.log(typeof numneighbours);

if (numneighbours == 23) { // 22 === 23 -> FALSE
    console.log('only 1 border!')
} else if (numneighbours < 1) {
    console.log('More than 1 border')
} else {
    console.log('No Border')
}



