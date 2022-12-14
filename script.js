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

const validChoice = ['rock', 'paper', 'scissor'];
const possibleChoices = ['Rock', 'Paper', 'Scissor'];


// function getUserChoice() {
//     let choice;
//     isnotValid = true;
//     while (isnotValid) {
//         choice = prompt("Please type your move: rock, paper, or scissor").toLowerCase()
//         if (validChoice.includes(choice)) {
//             isnotValid = false
//         }
//         else {
//             alert("Please enter a valid choice of the following: rock, paper, or scissor.")
//         }
//     }

//     return choice
// }

function getRandomChoice() {
    return possibleChoices[Math.floor(Math.random() * validChoice.length)]
}

// function game() {
//     let userChoice, randomChoice;

//     let userScore = 0, randomScore = 0;

//     // while (userScore < 3 && randomScore < 3){
//         userChoice = getUserChoice();
//         randomChoice = getRandomChoice();

//         if (userChoice == randomChoice){
//             alert(`It's a draw! Both of you played ${userChoice}!`);
//             alert(`Score remains: You (${userScore}) - Computer (${randomScore})`);
//         }
        
//         else if(
//             (userChoice == 'paper'&& randomChoice == "scissor") || 
//             (userChoice == 'rock'&& randomChoice == "paper") || 
//             (userChoice == 'scissor'&& randomChoice == "rock")
//         ) {
//             ++randomScore;
//             alert(`You lose! ${randomChoice} destroys ${userChoice}!`);
//             alert(`Score is now: You (${userScore}) - Computer (${randomScore})`);

//         }

//         else{
//             ++userScore;
//             alert(`You win! ${userChoice} obliterates ${randomChoice}!`);
//             alert(`Score is now: You (${userScore}) - Computer (${randomScore})`);
//         }
//     // }

//     if(userScore > randomScore){alert(`Congratulations! You win(${userScore} - ${randomScore})! The entire human existence is safe in your hands.`);} 
//     else{alert(`Pathetic! You lose (${userScore} - ${randomScore})! The human race stands no chance against the machine... thanks a lot >_>`);}
// }


let userChoice, randomChoice;
let userScore = 0, randomScore = 0;

function whichBtn (e){
    console.log(e.target.id);
    userChoice = e.target.textContent;
    randomChoice = getRandomChoice();
    choicesDiv.textContent = `You choose ${userChoice}. Robots choose ${randomChoice}.`;

    if (userChoice == randomChoice){
        resultDiv.textContent="It's a draw!";
    }
    
    else if(
        (userChoice == 'Paper'&& randomChoice == "Scissor") || 
        (userChoice == 'Rock'&& randomChoice == "Paper") || 
        (userChoice == 'Scissor'&& randomChoice == "Rock")
    ) {
        ++randomScore;
        resultDiv.textContent = `You lose! ${randomChoice} destroys ${userChoice}!`;
    }

    else{
        ++userScore;
        resultDiv.textContent = `You win! ${userChoice} obliterates ${randomChoice}!`;
    }

    scoreDiv.textContent = `Score: You (${userScore}) - Computer (${randomScore})`;

    if (userScore == 5 || randomScore == 5){
        btns.forEach((btn) => {
            btn.removeEventListener('click', whichBtn);
        });

        if(userChoice > randomChoice){
            alert(`Wooo! You Won!\nRefresh page to respawn/replay/rewaste your time.`);
        }
        else{ 
            alert(`Booo! You lost! \nRefresh page to respawn/replay/rewaste your time.`)
        }  
    }
}

const choicesDiv = document.getElementById('choices');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

const btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click', whichBtn);
});