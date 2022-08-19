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

