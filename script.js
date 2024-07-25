let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


/*
    math.random hamara 0-1 ke beech mai random num deta hai. agr mai chahu ki wo 0-10 ke beech num de to mai math.random() * 10 kar sakta hoon.
    math.floor se peeche ki saari decimal value hat jayegi. Math.floor(Math.random() * 3)
*/  
const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.background = "#081b31";
}

const showWinner = (userWin  , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.background = "green";
    }   
    else{
        compScore++;
        computerScorePara.innerText = compScore;
        msg.innerText = "You Loose";
        msg.style.background = "red";
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){ // Draw game
        drawGame();
    }   
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => { // sari ki sari choices mai se ham ek individual div nikaal re hai.
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})