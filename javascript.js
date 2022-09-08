const rockImage = './img/rock.jpg';
const paperImage = './img/paper.jpg';
const scissorsImage = './img/scissors.jpg';

function getComputerChoice() {
    return Math.floor(Math.random() * 3); //0 - rock, 1 - paper, 2 - scissors
}

function playRound(playerSelect, computerSelect) { //-1 - computer wins, 1 - human wins, 0 - remis
    if (playerSelect == 0) {
        document.getElementById("playerChoice").src = rockImage;
        if (computerSelect == 0) {
            document.getElementById("computerChoice").src = rockImage;
            return 0;
        }
        if (computerSelect == 2) {
            document.getElementById("computerChoice").src = scissorsImage;
            return 1;
        }
        if (computerSelect == 1) {
            document.getElementById("computerChoice").src = paperImage;
            return -1;
        }
    }
    if (playerSelect == 1) {
        document.getElementById("playerChoice").src = paperImage;
        if (computerSelect == 0) {
            document.getElementById("computerChoice").src = rockImage;
            return 1;
        }
        if (computerSelect == 2) {
            document.getElementById("computerChoice").src = scissorsImage;
            return -1;
        }
        if (computerSelect == 1) {
            document.getElementById("computerChoice").src = paperImage;
            return 0;
        }
    }
    if (playerSelect == 2) {
        document.getElementById("playerChoice").src = scissorsImage;
        if (computerSelect == 0) {
            document.getElementById("computerChoice").src = rockImage;
            return -1;
        }
        if (computerSelect == 2) {
            document.getElementById("computerChoice").src = scissorsImage;
            return 0;
        }
        if (computerSelect == 1) {
            document.getElementById("computerChoice").src = paperImage;
            return 1;
        }
    }
    return 99;
}

let wins = 0;
let losses = 0;
let scoreDiv = document.querySelector('.currentScore');
let resultDiv = document.querySelector('.result');

function playGame(playerSelect) {
    let computerSelect = getComputerChoice();
    let score = playRound(playerSelect, computerSelect);
    switch (score) {
        case 0:
            scoreDiv.textContent = wins + '-' + losses;
            resultDiv.textContent = "DRAW";
            break;
        case 1:
            wins++;
            scoreDiv.textContent = wins + '-' + losses;
            resultDiv.textContent = "An enemy has been slain!";
            break;
        case -1:
            losses++;
            scoreDiv.textContent = wins + '-' + losses;
            resultDiv.textContent = "An ally has been slain!";
            break;
        default:
            console.log('Smth wrong');
    }
    if (wins >= 3) {
        resultDiv.textContent = "VICTORY";
        wins = 0;
        losses = 0;
        return 0;
    }
    else if (losses >= 3) {
        resultDiv.textContent = "DEFEAT";
        wins = 0;
        losses = 0;
        return 0;
    }
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    rock.classList.add('playing');
    playGame(0);
});
paper.addEventListener('click', () => {
    paper.classList.add('playing');
    playGame(1);
});
scissors.addEventListener('click', () => {
    scissors.classList.add('playing');
    playGame(2);
});

const keys = Array.from(document.querySelectorAll('img'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

