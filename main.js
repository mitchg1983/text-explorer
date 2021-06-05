const prompt = require('prompt-sync')();

let win = 0;
let posX = 0;
let posY = 0;

console.log ('Your position is ', posX, ',', posY);
console.log ('What direction would you like to travel?');

while (win !== 1) {
    console.log ('Hello!')
    direc = prompt ('What direction would you like to travel?')

if (direc === 'North') {
    posX = (posX + 1);
    console.log ('Your position is ', posX, posY);
}
if (direc === 'South') {
    posX = (posX - 1);
    console.log ('Your position is ', posX, posY);
}
if (direc === 'East') {
    posY = (posY + 1);
    console.log ('Your position is ', posX, posY);
}
if (direc === 'West') {
    posY = (posY - 1);
    console.log ('Your position is ', posX, posY);
}
if (posX === 2 && posY === 2) {
    win = 1;
}
}

if (win === 1) {
    console.log ('You won the gane!')
}