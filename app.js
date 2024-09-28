let userScore = 0;
let compScore = 0;

// get required ids,classes and tags 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

// logic to get computer choice
const getCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}


// displays final winner along with some state changes
const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You Lost !  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// function to display if draw happens
const drawGame = () => {
    msg.innerText = "Game Drawn ..";
    msg.style.backgroundColor = "purple";
    msg.style.color = "white";
}

// whole playing Game logic 
const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);

    // get computer choice 
    const compChoice = getCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

// getting all choices through forEach and calling playGame()
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked..",userChoice);
        playGame(userChoice);
    })
})