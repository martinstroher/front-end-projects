const p1Button = document.querySelector("#player-one");
const p2Button = document.querySelector("#player-two");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector('#select');



let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
    }
    if (p1Score === winningScore) {
        isGameOver = true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score;
}
);

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
    }
    if (p2Score === winningScore) {
        isGameOver = true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score;
}
);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})



resetButton.addEventListener('click', function () {
    reset();
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

