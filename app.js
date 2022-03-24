//todo 

/**
 * 1. Save player name in the localStorage
 * 
 * 2. Save both computer and your score.
 * 
 */
 let player_score=0;
 let computer_score=0;

const getElement = (type) => {
    return document.querySelector(type);
}

const game = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
}

const gameChoices = [game.rock, game.paper, game.scissors];

const computerPlayer = ()=>{
    const choosePlayer = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    getElement("#comp-choice").innerHTML = choosePlayer;
    return choosePlayer;
}

function chooseRock() {
    
    const choosePlayer = computerPlayer();

    getElement("#result").innerHTML= game.rock;

    const gameRemarks = {
        win: "You WIN!! Yaaayyy!",
        draw: "Play again",
        lose: "You lose... HA HA HA"
    }

    switch (choosePlayer) {
        case game.rock: getElement("#comments").innerHTML = gameRemarks.draw;
            
            break;
        case game.paper: getElement("#comments").innerHTML = gameRemarks.lose;
        ++computer_score
        getElement("#player-score").innerHTML = computer_score;
        console.log("Computer score is " + computer_score +" and the player score is " + player_score);
            
            break;

        default: getElement("#comments").innerHTML = gameRemarks.win;
        ++player_score
        getElement("#player-score").innerHTML = player_score;
        console.log("Computer score is " + computer_score +" and the player score is " + player_score);

            break;
    }

}

function choosePaper() {
    const choosePlayer = computerPlayer();

    getElement("#result").innerHTML= game.paper;

    switch (choosePlayer) {
        case game.paper:  getElement("#comments").innerHTML = "Play again";
            
            break;
        case game.scissors:  getElement("#comments").innerHTML = "You lose... HA HA HA";
            
            break;

        default: getElement("#comments").innerHTML ="You WIN!! Yaaayyy!";
            break;
    }


}

function chooseScissors() {
    const choosePlayer = computerPlayer();

    getElement("#result").innerHTML= game.scissors;

    switch (choosePlayer) {
        case game.scissors:  getElement("#comments").innerHTML = "Play again";
            
            break;
        case game.rock:  getElement("#comments").innerHTML = "You lose... I ROCK, HAHAHA!";
            
            break;

        default: getElement("#comments").innerHTML ="You WIN!! Yaaayyy!";
            break;
    }


}
