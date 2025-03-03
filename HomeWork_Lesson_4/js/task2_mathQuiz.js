function getAnswr(message) {
    while (true) {
        let userValue = prompt(message);
        let isValid = !isNaN(userValue) && userValue !== "" && userValue !== null;
        if (isValid) return Number(userValue);
    }
}


let wrongScore = 0;
let correctScore = 0;


for (let i = 0; i < 4; i++) {

    let value1 = Math.floor(Math.random() * 10) + 1;  // generates from 1 to 10

    let value2 = Math.floor(Math.random() * 10) + 1;  // generates from 1 to 10

    let value3 = Math.floor(Math.random() * 100) + 1;  //generates from 1 to 100

    let result;
    if (value3 <= 25) {
        alert(`${value1} + ${value2}`);
        result = value1 + value2;
    } else if (value3 <= 50) {
        alert(`${value1} - ${value2}`);
        result = value1 - value2;
    } else if (value3 <= 75) {
        alert(`${value1} * ${value2}`);
        result = value1 * value2;
    } else if (value3 <= 100) {
        alert(`${value1} / ${value2}`);
        result = (value1 / value2).toFixed(1);
    }
    
    for (k = 0; k < 3; k++) {
        let userAnswr = getAnswr("Enter your answer");
        if (userAnswr == result) {
            correctScore = correctScore + 1;
            alert("Congratulations! Correct answer!");
            break;
        } else {
            wrongScore = wrongScore + 1;
            alert("Not Correct. Try again.");
        }
    }

}

alert(`Wrong answer score is ${wrongScore} \nCorrect answer score is ${correctScore}`);
alert(`Game Over. \nTo re-start press F5 button`);