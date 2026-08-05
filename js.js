let human = 0;
let humanFixed = 0;
let humanScore = 0;
let compScore = 0;

function getComputerChoice(){
    let random_number = Math.floor(Math.random() * 3);
    if(random_number === 0){
        return "rock";
    }else if(random_number === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    do{
    human = prompt("podaj znak")
    humanFixed= human.toLowerCase()
    if(humanFixed !== "rock" && humanFixed !== "paper" && humanFixed !== "scissors"){
        console.log("zle wprowadzony znak")
    }
    }while(humanFixed !== "rock" && humanFixed !== "paper" && humanFixed !== "scissors")
        return humanFixed
}

function playRound(){
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    console.log(computerChoice)
    if(humanChoice === computerChoice){
        console.log("Draw")
    }else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        console.log("You win!")
        humanScore += 1
    }else{
        console.log("You lose!")
        compScore += 1
    }
    console.log("=========")
    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${compScore}`)
    console.log("=========")
}

function playGame(){
    for(let i = 0; i < 3; i++){
        playRound()
    }
    if(humanScore>compScore){
        console.log("You win whole game!!!")
    }else if(humanScore === compScore){
        console.log("Mega draw!!!")
    }else{
        console.log("You totally lose!!!")
    }
}
playGame()
