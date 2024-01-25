let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".options");
let displayMsg = document.querySelector("#display-msg");
let userCount = document.querySelector("#user-score");
let botCount = document.querySelector("#bot-score");
let vs = document.querySelector(".vsBox");

const reset = () => {
vs.classList.add("hide");
displayMsg.innerHTML = "Play your move";
}

const displayWinner = (result) => {
console.log(result);
if(result === "user") {
userScore++;
userCount.innerHTML = `${userScore}`;
displayMsg.innerHTML = "Hurray, You Won";
} else if(result === "bot"){
botScore++;
botCount.innerHTML = `${botScore}`;
displayMsg.innerHTML = "Oops, You lost";
} else {
displayMsg.innerHTML = "Oh, it's a draw";
}
}

const genBotChoice = () =>{
const options = ["rock","paper","scissor"];
let index = Math.floor(Math.random()*3);
return options[index];
}

const displayVs = (first,second) => {
vs.classList.remove("hide");
vs.innerText = `${first} vs ${second}`;
}

const playgame = (userChoice) => {
let botChoice = genBotChoice();
displayVs(userChoice,botChoice);
setTimeout(reset,2000);
if(userChoice === "rock") {
              if(botChoice === "rock") displayWinner("draw");
              else if(botChoice === "paper") displayWinner("bot");
              else displayWinner("user");
} else if(userChoice === "paper") {
              if(botChoice === "rock") displayWinner("user");
              else if(botChoice === "paper") displayWinner("draw");
              else displayWinner("bot");
} else {
              if(botChoice === "rock") displayWinner("bot");
              else if(botChoice === "paper") displayWinner("user");
              else displayWinner("draw");   
}
}

choices.forEach((choice) => {
choice.addEventListener("click",() => {
const userChoice = choice.getAttribute("id");
playgame(userChoice);
});
});
