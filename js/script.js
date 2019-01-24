"use strict";

// Goal is to have the user start the game and get a random number to use as damage towards them and Almightly Grant 

let userName;                                           // Declare/initialize the variables used with let
let wins = 0;
let userHP = 40;
let grantHP = 10;

function startGame() {                                   // Where startGame function is declared
    if (prompt("Do you want to play?") === "yes")       // Prompts where the user would like to play the game and enter characters name
    {
        userName = prompt("Enter your characters name.")
    }
}

startGame();                                            // Call startGame function

function startCombat() {                                 //Execute startCombat function

    while (userHP <= 40) {                                  // You still start with 40 health points
        if (prompt("Would you like to attack or quit?") === "attack") {  // The user is asked if they want to attack, if so the function getDmg will run on the user and Almighty Grant's health points decreasing them by a random number of 1 to 5
            userHP = userHP - getDmg();
            console.log(`${userName} has ${userHP} health left.`);
            grantHP = grantHP - getDmg();
            console.log(`Almighty Grant has ${grantHP} health left.`);

        } else {                                                             // Where the while loop will end if the user chooses to quit the game
            break;

        }

        (grantHP <= 10)                                             // Almighty Grant's health points start at 10

        if (userHP <= 0) {                                           // If the user's health points drop less than or equal to 0
            console.log(`${userName} loses. Almightly Grant wins.`)
            break;                                                  // Where the game would end because the user has lost
        }
        if (grantHP <= 0) {                                          // If Almighty Grant's health points are less than or equal to 0
            wins++; grantHP = 10;                                   // The number of rounds won increases by 1 and his health is replenished to 10
            console.log(`You have beat Almighty Grant! You have won ${wins} round(s).`)
        }

        if (wins >= 3) {                                            // If the number of rounds won becomes equal (or greater) than 3 then user wins
            console.log(`You beat the Almighty Grant. Congratulations ${userName} you win!`);
            break;                                                  // Where the game would end because the user has won

        } else if (userHP <= 0) {                                    // If the users health points is less than or equal to 0 before 3 wins are met Almighty Grant wins
            console.log("Game Over. Almighty Grant Wins.");
        }
    }
}

startCombat();                                   // Calling startCombat function
function getDmg() {                              // Declare/itilialize the getDmg function
    return Math.floor(Math.random() * 5 + 1);    // Uses Math.floor(Math.random) by...
                                                 // Returning a random number lower than 1 (Math.random), then making than number into an integer (Math.floor)
}                                                // Then returns a random integer 0 to 4, then from 1 to 5 which is what we want

