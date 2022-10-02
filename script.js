/* 
> create a list of 3 choices rock, paper, scissor (all lowercase) store in validChoice
> get user choice and store in userChoice 
    >make case-insensitive by transforming input to lowercase
    >only accept valid choices that matches one of validChoice's
        >keep asking until valid choice
> Create a list of valid choices get random choice and store in randomChoice

>Play game
    > initial scores user (0) - computer (0)
    >compare against randomized "Rock", "Paper", "Scissor" stored in randChoice
    : if (userChoice == randomChoice) print "Draw! Play again!" >> restart game
    : otherwise if (userChoice = Rock, randomChoice = paper OR user = paper, randomChoice = scissors
        OR userChoice = scissor, randomChoice = Rock) print ("Computer Wins! Computer reigns supreme wow!")
    : otherwise print ("User wins! User is very skilled wow!")
    > increase winner's score by 1 

> if userScore or randScore = 3, game ends 
*/

let validChoice = ['rock','paper','scissor']
let userChoice, randomChoice, userScore, randomScore

isnotValid = true;
while(isnotValid){
    userChoice = prompt("Please type your move: rock, paper, or scissor").toLowerCase();
    if (validChoice.includes(userChoice)){
        isnotValid = false
    }
    else {
        alert("Please enter a valid choice of the following: rock, paper, or scissor.")
    }
}

function getRandomChoice (){
    randomChoice = validChoice[Math.floor(Math.random()*validChoice.length)]
}

function game(){

}

