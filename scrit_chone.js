function ageInDays(){
    let birthyear = prompt("What year you were born? ");
    let ageInDateAmount = (2021 - birthyear) *365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are '+ ageInDateAmount + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
 
};

function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    div.appendChild(image);
};

 // Challenge 3

function rpsGame(yourChoice) {
    //console.log(yourChoice);
    let humanChoice, botChoice;
    botChoice = numberChoice(randomNum());
    humanChoice = yourChoice.id;
    // botChoice = 
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result);
    FrontEnd(yourChoice.id ,botChoice, message);


function randomNum (){
    return Math.floor(Math.random() * 3);
}
function numberChoice(number) {
    return['rock', 'paper', 'scissor'] [number];
} 
function decideWinner (yourChoice, computerChoice){
    let dataBase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor':0.5, 'rock':0}
    };

    let yourScore = dataBase[yourChoice][computerChoice];
    let computerScore = dataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage ([yourScore, computerScore]) {
     if (yourScore === 0){
         return {'message': 'You lost!', 'color': 'red'};
     }else if (yourChoice === 0.5) {
         return {'message': 'You Tied!', 'color': 'yellow'};
     } else {
         return {'message': 'You win!', 'color': 'green'};
     }
}

function FrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('dic');

    humanDiv.innerHTML = "<img src = '" + dataBase[humanImageChoice]  + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233,1);>";
    messageDiv.innerHTML = "<h1 style = ' color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src = '" + dataBase[botImageChoice]  + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);>";


    document.getElementById('game-container').appendChild[humanDiv];
    document.getElementById('game-container').appendChild(messageDiv);
    document.getElementById('game-container').appendChild[botDiv];
    
}}