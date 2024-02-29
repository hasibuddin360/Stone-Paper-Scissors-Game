/** @format */

let userScore = 0;
let compScore = 0;
let drawCount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userSocrePera = document.querySelector("#user-score");
const compSocrePera = document.querySelector("#comp-score");

const genCompChoice = () => {
  //This is Funtion
  const optinos = ["stone", "paper", "scissors"]; //This is Array
  const randIdx = Math.floor(Math.random() * 3);
  console.log(randIdx);
  return optinos[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "black";
  msg.style.borderRadius = "25px";
  msg.style.padding = "20px";
  drawCount++;
  document.getElementById("draw-score").innerText = drawCount;
};

const shoWinner = (userWine, userChoice, CompChoice) => {
  if (userWine) {
    userScore++;
    userSocrePera.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.borderRadius = "25px";
    msg.style.padding = "20px";
  } else {
    compScore++;
    compSocrePera.innerText = compScore;
    msg.innerText = `You lose! ${CompChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.borderRadius = "25px";
    msg.style.padding = "20px";
  }
};

const playGame = (userChoice) => {
  const CompChoice = genCompChoice();
  if (userChoice === CompChoice) {
    // Draw game
    drawGame();
  } else {
    let userWine = true;
    if (userChoice === "stone") {
      userWine = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWine = CompChoice === "sissors" ? false : true;
    } else {
      userWine = CompChoice === "stone" ? false : true;
    }
    shoWinner(userWine, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
