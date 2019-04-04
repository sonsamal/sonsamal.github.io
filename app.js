//DOM Cache begin

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_choice = document.getElementById("choice");
const result_outcome = document.getElementById("outcome");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

let user_choices = {'r':'ROCK','p':'PAPER','s':'SCISSOR'}

function getUserChoice(choice){
    return user_choices[choice]
}

function getComputerChoice() {
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userScore, computerScore)
    result_choice.innerHTML = "You Chose "+getUserChoice(user)+" Computer Chose "+getUserChoice(computer);
    result_outcome.innerHTML = "You beat Computer. YOU WIN! 🔥";
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userScore, computerScore);
    result_choice.innerHTML = "You Chose "+getUserChoice(user)+" Computer Chose "+getUserChoice(computer);
    result_outcome.innerHTML = "Computer beats You. YOU LOSE! 💩";
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_choice.innerHTML = "SAME CHOICES!!";
    result_outcome.innerHTML = "YOU TIED...RETRY? 🤔";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(userChoice+" "+computerChoice)
    
    switch(userChoice + computerChoice) {
        
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r")
    })
    
    paper_div.addEventListener('click', function() {
        game("p")
    })
    
    scissor_div.addEventListener('click', function() {
        game("s")
    })

}

main();

//DOM Cache End

