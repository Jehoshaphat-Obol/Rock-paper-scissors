// 1.    create a function called computer play that randomly returns either rock, paper or scissors. that will make the computer play
function computersMove(){
    // create a variable called choice
    let choice;
    // let choice store a random integer 1, 2 or 3
    choice = Math.round(Math.random() * 3);
    // **make sure that zero is not assigned in choice
    // while zero is assigned to choice
    while(choice == 0){
        // assign another random integer 1, 2 or 3
        choice = Math.round(Math.random() * 3);
        // end while
    }
    // if the integer is 1 
    if(choice == 1){
        // let the function return rock.
        return "rock";
    }
    // else if the integer is 2
    else if(choice == 2){
        // let the function return paper
        return "paper";
    }
    // else if the integer is 3
    else if(choice == 3){
        // let the function return scissors
        return "scissors";
    // end if
    }
    // **mind case sensitivity
}

//  ***initialize the score to [0][0] ie[player][computer] using an array
// create an array to hold records
let score = new Array(0, 0);
let point;
//initialize the players move
let playersMove;

// 2.    create a function that plays a single round of rock paper scissors.
// the function should take two parameters the playerSelection and computerSelection.
function play(player, computer){
    // the function should also return a string that declares the winner of the round like so: 'you lose! Paper beats rock'
    // ***looking for the winner by comparing the parameters

    
    // if player = rock and computer = rock
    if(player == 'rock' && computer == 'rock'){
        // then print it is a tie
        console.log("It's a tie");
        // return [0][0]
        return [1, 1];
    }
    // else if player = rock and computer = paper
    else if(player == 'rock' && computer == 'paper'){
        // then print you lose! paper beats rock
        console.log("You lose! Paper beats rock");
        // return [0][1]
        return [0, 1];
    }
    // else if player = rock and computer = scissors
    else if(player == 'rock' && computer == 'scissors'){
        // then print you win! rock beats scissors
        console.log("You win! Rock beats scissors");
        // return [1][0]
        return [1, 0];
    }
    //else if player = paper and computer = rock
    else if(player == 'paper' && computer == 'rock'){
        // then print you win! paper beats rock
        console.log("You win! paper beats rock");
        // return [0][0]
        return [1, 0];
    }
    // else if player = paper and computer = paper
    else if(player == 'paper' && computer == 'paper'){
        // then print it's a tie
        console.log("it's a tie");
        // return [0][1]
        return [1, 1];
    }
    //else if player = paper and computer =scissors
    if(player == 'paper' && computer == 'scissors'){
        // then print You lose! scissors beat rock
        console.log("You lose! scissors beat rock");
        // return [0][0]
        return [0, 1];
    }
    // else if player = scissors and computer = paper
    else if(player == 'scissors' && computer == 'paper'){
        // then print You win! scissors beat paper
        console.log("You win! scissors beat paper");
        // return [0][1]
        return [1, 0];
    }
    // else if player = scissors and computer = scissors
    else if(player == 'scissors' && computer == 'scissors'){
        // then printvit's a tie
        console.log("It's a tie");
        // return [1][0]
        return [1, 1];
    }
    // else if player = scissors and computer = scissors
    else if(player == 'scissors' && computer == 'rock'){
        // then print you lose! rock beats scissors
        console.log("You lose! Rock beats scissors");
        // return [1][0]
        return [0, 1];
    }
    // else
    else{
        // then print out You've inputted the wrong move please refresh and try again
        console.log("You're input is invalid, you lose one point");
        return [-1, 0]
        // end if
    }
}                                    
// 3.    write a new function that calls the play function and keeps records of the game

function gameOn(){
    // call the function above a get the return value for 5 iterations
    for(let i = 0; i < 5; i++){
        // ***Get users input
        playersMove = prompt("Type in you move","rock or paper or scissors");
        // a.  make the playerSelection case-insensitive so that user can input rock, Rock, ROCK or any other variation.
        playersMove = playersMove.toLowerCase();

        // create a new array variable point
        point = play(playersMove, computersMove());
        // add the points to the records
        score[0] += point[0];
        score[1] += point[1];
    }
    // compare the computer's score with the players score and declare the winner
    if(score[0] > score[1]){
        console.log(`You win! your score is ${score[0]}, and computer's score is ${score[1]}`);
    }else if(score[0] < score[1]){
        console.log(`You lose! your score is ${score[0]}, and computer's score is ${score[1]}`);
    }else{
        console.log(`It's a tie! your score is ${score[0]}, and computer's score is ${score[1]}`);
    }
}