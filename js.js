let human = 0;
let humanChoice = 0;
let humanScore = 0;
let compScore = 0;

function getComputerChoice(){
    random_number = Math.floor(Math.random() * 3);
    if(random_number === 0){
        return console.log("rock");
    }else if(random_number === 1){
        return console.log("paper");
    }else{
        return console.log("scisors");
    }
}

function getHumanChoice(){
    do{
    human = prompt("podaj znak")
    humanChoice= human.toLowerCase()
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scisors"){
        console.log("zle wprowadzony znak")
    }
    }while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scisors")
        return humanChoice
}

    
console.log(getComputerChoice())
console.log(getHumanChoice())
