//Standard import of the prompt dependency.
const prompt = require('prompt-sync')();


//This is the win condition for the game. Setting this value to '1' will escape the main while loop, 
//where the majority of the game is written.
let win = 0;


//Starting coordinates for the player, using 'let' so we can reassign values to posX and posY.
let posX = 0;
let posY = 0;

//Starting value for the intro.
let intro = 0

let dog = 0

//Main content of the game. Once inside this while loop, all player input is collected. Whatever is written here will
//appear each time the code is run. I may want to add a condition where the text here is only displayed the first time
//a player starts the game.



        console.log ('                                   /\\\									 ')
        console.log ('                              /\\\  //\\\\								')
        console.log ('                       /\\\    //\\\\///\\\\\\\        /\\\						')
        console.log ('                      //\\  ///\////\\  /\  //\\						')
        console.log ('         /\\\          /  ^ \\\/^ ^/^  ^  ^ \\\/^ \\\/  ^ \\\					')
        console.log ('        / ^\\\    /\\\  / ^   /  ^/ ^ ^ ^   ^\\\ ^/  ^^  \\\					')
        console.log ('       /^   \\\  / ^\\\/ ^ ^   ^ / ^  ^    ^  \\\/ ^   ^  \\\       *			')
        console.log ('      /  ^ ^ \\\/^  ^\\\ ^ ^ ^   ^  ^   ^   ____  ^   ^  \\\     /|\\\			')
        console.log ('     / ^ ^  ^ \\\ ^  _\\\___________________|  |_____^ ^  \\\   /||o\\\		')
        console.log ('    / ^^  ^ ^ ^\\\  /______________________________\\\ ^ ^ \\\ /|o|||\\\		')
        console.log ('   /  ^  ^^ ^ ^  /________________________________\\\  ^  /|||||o|\\\		')
        console.log ('  /^ ^  ^ ^^  ^    ||___|___||||||||||||___|__|||      /||o||||||\\\		') 
        console.log (' / ^   ^   ^    ^  ||___|___||||||||||||___|__|||          | |        	')
        console.log ('/ ^ ^ ^  ^  ^  ^   ||||||||||||||||||||||||||||||oooooooooo| |ooooooo 	')
        console.log ('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo		       	')
        console.log ('       _________    __  _________   _   _____    __  _________')
        console.log ('      / ____/   |  /  |/  / ____/  / | / /   |  /  |/  / ____/')
        console.log ('     / / __/ /| | / /|_/ / __/    /  |/ / /| | / /|_/ / __/   ')
        console.log ('    / /_/ / ___ |/ /  / / /___   / /|  / ___ |/ /  / / /___   ')
        console.log ('    \\\____/_/  |_/_/  /_/_____/  /_/ |_/_/  |_/_/  /_/_____/   ')
        
        console.log ('Hello! Welcome to the game.');
        console.log ('Type START to begin.');
        console.log ('');
        begin = prompt ('>');
        if (begin === 'START') {
            intro = 1;
        }
    
while (intro === 1 && win === 0) {
        //Now that the intro has been completed, we are in the game 'proper'. 

        
        console.log ('');
        console.log ('You are currently at ', posX, posY);
        console.log ('What direction would you like to travel?');
        console.log ('');
        direc = prompt ('>');
        
        //Below here are the four different directions the player can travel. Their location is updated after each run of the code.    

        if (direc === 'North') {
            posY = (posY + 1);
        }
        
        if (direc === 'South') {
            posY = (posY - 1);
        }
        
        if (direc === 'East') {
            posX = (posX + 1);
        }
        
        if (direc === 'West') {
            posX = (posX - 1);
        }
        
        //Here are the 25 different 'squares' or 'locations' of the game. 
        
        if (posX === 0 && posY === 0 && dog === 0) {
            console.log ('no dog');
        }
        
        if (posX === 0 && posY === 0 && dog === 1) {
            win = 1;
            console.log ('dog is here');
        }

        
        
        if (posX === 1 && posY === 0 ) {
            console.log ('You are in 1,0')
        }
        
        
        if (posX === 2 && posY === 0 ) {
            dog = 1;
            console.log ('You found Fluffy')
        }
        
        
        if (posX === -1 && posY === 0 ) {
            console.log ('You are in -1,0');
            
        }
        
        
        if (posX === -2 && posY === 0 ) {
            
            
        }
        
        if (posX === 0 && posY === 1 ) {
            
        }
        
        
        if (posX === 1 && posY === 1 ) {
            
        }
        
        
        if (posX === 2 && posY === 1 ) {
            
        }
        
        
        if (posX === -1 && posY === 1 ) {
            
        }
        
        
        if (posX === -2 && posY === 1 ) {
            
            
        }
        if (posX === 0 && posY === 2 ) {
            
        }
        
        
        if (posX === 1 && posY === 2 ) {
            
        }
        
        
        if (posX === 2 && posY === 2 ) {
            
        }
        
        
        if (posX === -1 && posY === 2 ) {
            
        }
        
        
        if (posX === Number(-2) && posY === 2 ) {
            
            
        }
        if (posX === 0 && posY === -1 ) {
            
        }
        
        
        if (posX === 1 && posY === -1 ) {
            
        }
        
        
        if (posX === 2 && posY === -1 ) {
            
        }
        
        
        if (posX === -1 && posY === -1 ) {
            
        }
        
        
        if (posX === -2 && posY === -1 ) {
            
            
        }
        if (posX === 0 && posY === -2 ) {
            
        }
        
        
        if (posX === 1 && posY === -2 ) {
            
        }
        
        
        if (posX === 2 && posY === -2 ) {
            
        }
        
        
        if (posX === -1 && posY === -2 ) {
            
        }
        
        
        if (posX === -2 && posY === -2 ) {
            
        }
        
        //End of the 'squares'/'locations' section.
    }




if (intro === 1 && win === 1) {console.log ('You won the gane!')}