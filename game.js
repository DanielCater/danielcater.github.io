let randomNum = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector(".guessField");
const button = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;

function evaluate() {
    let num = Number(input.value);
    input.value = "";

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }

    guesses.textContent = `${guesses.textContent} ${num}`;

    if (num === randomNum) {
        lastResult.textContent = "Congradulations, you guessed correct";
        lastResult.className = 'lastResult alert alert-success';
        lowOrHi.textContent = "";
        gameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = "GAME OVER";
        lastResult.className = 'lastResult alert alert-danger';
        lowOrHi.textContent = "";
        gameOver();
    }
    else {
        lastResult.textContent = "Wrong!";
        lastResult.className = 'lastResult alert alert-danger';
        if (num < randomNum) {
            lowOrHi.textContent = "Last guess was too low";
        }
        else {
            lowOrHi.textContent = "Last guess was too high";
        }
    }
    guessCount++;
}

function gameOver() {
    input.disabled = true;
    button.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.className = 'btn btn-success mt-3';
    document.querySelector('.container').appendChild(resetButton)
    resetButton.addEventListener("click", reset);
}

function reset() {
    guessCount = 1;
    guesses.textContent = "";
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    lastResult.className = 'lastResult';
    input.disabled = false;
    button.disabled = false;
    input.value = "";
    input.focus();
    resetButton.parentNode.removeChild(resetButton);

    randomNum = Math.floor(Math.random() * 100) + 1;
}

button.addEventListener("click", evaluate);
