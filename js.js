let human = 0;
let humanFixed = 0;

let humanScore = document.getElementById("human-score").innerText
let compScore = document.getElementById("comp-score").innerText

humanScore = 0;
compScore = 0;
console.log(humanScore, compScore)

function getComputerChoice(){
    let random_number = Math.floor(Math.random() * 3);
    if(random_number === 0){
        return "Rock";
    }else if(random_number === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

let buttons = document.querySelectorAll(".play-btn");
buttons.forEach((button) =>{
    button.addEventListener("click", () => {
       playRound(button.innerText)
    })
})


function playRound(humanChoice){
    if(humanScore >= 4 || compScore >= 4){
        document.getElementById("game").style.display = "none"
        document.getElementById("end").style.display = "block"
        document.getElementById("winner").innerText = humanScore === 4 ? "You" : "Computer";
    }
    document.getElementById("last-round").style.display = "block"
    document.getElementById("human-choice").innerText = humanChoice
    let computerChoice = getComputerChoice()
    document.getElementById("comp-choice").innerText = computerChoice
    if(humanChoice === computerChoice){
        document.getElementById("resoult").innerText = "Draw"
    }else if((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Rock")){
        document.getElementById("resoult").innerText = "You win"
        humanScore += 1
        document.getElementById("human-score").innerText = humanScore
    }else{
        document.getElementById("resoult").innerText = "Computer wins"
        compScore += 1
        document.getElementById("comp-score").innerText = compScore
    }
    
    // console.log("=========")
    // console.log(`Your score: ${humanScore}`)
    // console.log(`Computer score: ${compScore}`)
    // console.log("=========")
}
const playAgain = () => {
    humanScore = 0;
    compScore = 0;
    document.getElementById("winner").innerText = ""
    document.getElementById("game").style.display = "block"
    document.getElementById("end").style.display = "none"
    document.getElementById("human-score").innerText = humanScore
    document.getElementById("comp-score").innerText = compScore
    document.getElementById("last-round").style.display = "none"
    document.getElementById("resoult").innerText = ""
}

document.getElementById("play-again").addEventListener("click", playAgain)

// function playGame(){
//     for(let i = 0; i < 5; i++){
//         playRound()
//     }
//     if(humanScore>compScore){
//         console.log("You win whole game!!!")
//     }else if(humanScore === compScore){
//         console.log("Mega draw!!!")
//     }else{
//         console.log("You totally lose!!!")
//     }
// }
// playGame()
