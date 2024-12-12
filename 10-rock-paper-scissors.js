let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();
  updateResult();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "Bawi nalang.";
      } else if (computerMove === "paper") {
        result = "Panalo ka!";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "Panalo ka!";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "Bawi nalang.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "Bawi nalang.";
      } else if (computerMove === "scissors") {
        result = "Panalo ka!";
      }
    }

    if (result === "Panalo ka!") {
      score.wins += 1;
    } else if (result === "Bawi nalang.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();
    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML = `You
  <img src="icons/${playerMove}-emoji.png" alt="rock" class="move-icon" />
  <img src="icons/${computerMove}-emoji.png" alt="scissors" class="move-icon" />
  Computer`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }
    return computerMove;
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }