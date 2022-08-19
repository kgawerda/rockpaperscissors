function getComputerChoice(){
    return Math.floor(Math.random()*3); //0 - rock, 1 - paper, 2 - scissors
}

function playRound(playerSelect, computerSelect){ //-1 - computer wins, 1 - human wins, 0 - remis
    if(playerSelect==0){
        if(computerSelect==0) return 0;
        if(computerSelect==2) return 1;
        if(computerSelect==1) return -1;
    }
    if(playerSelect==1){
        if(computerSelect==0) return 1;
        if(computerSelect==2) return -1;
        if(computerSelect==1) return 0;
    }
    if(playerSelect==2){
        if(computerSelect==0) return -1;
        if(computerSelect==2) return 0;
        if(computerSelect==1) return 1;
    }
    return 99;
}

let wins=0;
let losses=0;
for(let i=0; i<5; i++){
    if(wins>=3){
        console.log('You win! Congratulations!');
        break;
    }
    else if(losses>=3){
        console.log('Take the L, loser');
        break;
    }
    console.log("가위바위보!");
    let computerSelect=getComputerChoice();
    let playerChoice=prompt("Choose your fighter!");
    let playerSelect;
    switch(playerChoice.toLowerCase()){
        case 'rock':
            playerSelect=0;
            break;
        case 'paper':
            playerSelect=1;
            break;
        case 'scissors':
            playerSelect=2;
            break;
        default:
            console.log('Smth wrong');
    }
    let score=playRound(playerSelect, computerSelect);
    switch(score){
        case 0:
            console.log("Remis!")
            console.log('Current score:');
            console.log('Player '+wins+'-'+losses);
            break;
        case 1:
            wins++;
            console.log("You win this time")
            console.log('Current score:');
            console.log('Player '+wins+'-'+losses);
            break;
        case -1:
            losses++;
            console.log("You lose this time")
            console.log('Current score:');
            console.log('Player '+wins+'-'+losses);
            break;
        default:
            console.log('Smth wrong');
    }
}
