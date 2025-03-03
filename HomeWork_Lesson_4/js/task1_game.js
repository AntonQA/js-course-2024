let userScore = 0;
let computerScore = 0;
let drawScore = 0;

for (let i = 0; i < 3; i++) { // game has 3 rounds

    function getValue(message) {
        while (true) {
            let value = prompt(message);
            let isValid = (value !== "" && value !== null) && (value.toLowerCase() == "rock" || value.toLowerCase() == "paper" || value.toLowerCase() == "scissors");
            console.log(value);
            if (isValid) {
                return value.toLowerCase();
            } else if (value == null) {
                // do nothing when user clicks Cancel on modal dialog
            } else if (value.toLowerCase() == "exit") {
                i = 3;
                break;
            }

        }
    }

    let userChoise = getValue(`Enter "Rock", "Paper" or "Scissors".\nEnter "Exit" to quit the game.`);

    let computerChoise;
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        computerChoise = "rock";
    } else if (randomNumber <= 66) {
        computerChoise = "paper";
    } else if (randomNumber <= 99) {
        computerChoise = "scissors";
    }


    let compWins = (userChoise == "rock" && computerChoise == "paper") ||
        (userChoise == "paper" && computerChoise == "scissors") ||
        (userChoise == "scissors" && computerChoise == "rock");


    let userWins = (userChoise == "rock" && computerChoise == "scissors") ||
        (userChoise == "paper" && computerChoise == "rock") ||
        (userChoise == "scissors" && computerChoise == "paper");

    let drawResult = (userChoise == computerChoise);


    if (compWins) {
        computerScore += 1;
        alert(`User says "${userChoise}". Computer says "${computerChoise}". Result: Computer wins!`);
    } else if (userWins) {
        userScore += 1;
        alert(`User says "${userChoise}". Computer says "${computerChoise}". Result: User wins!`);
    } else if (drawResult) {
        drawScore += 1;
        alert(`User says "${userChoise}". Computer says "${computerChoise}". Result: it's a draw`);
    }

    alert(`User score: ${userScore} \nComputer score: ${computerScore} \nDraw: ${drawScore}`);

    if (i >= 2) {
        alert("Game Over! \nTo re-start press F5 button.");
    }
}