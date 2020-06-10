/*
Game Rules:

-The game has 2 players , playing in rounds
-In each turn , a player rolls a dice as many times as he wishes.Each result 
 get added to his round score.
-But,if the player rolls a 1, all his Round score gets lost.After that, its 
 the next players turn .
-The first player to reach 100 points on Global score wins the game


*/
alert("Go back and go through the rules, if you are new to the game!!!");
//var player1 = window.prompt("Enter first player's name");
//var player2 = window.prompt("Enter second player's name");

var scores, roundScore, activePlayer, gamePlaying;
init();
//document.querySelector("#name-0").textContent = player1;
//document.querySelector("#name-1").textContent = player2;
//var lastDice;

//console.log(dice);
//= dice;
//document.querySelector("#current-" + activePlayer).innerHTML =
//"<em>" + dice + "</em>";
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

/*callback functionfunction btn() {
    
}*/
//btn();
//Anonymous function which doesnt have a name and cant be called outside the function

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //1.Random Number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    //console.log(dice);

    //3.Update the score if the rolled number was not a 1
    /*if (dice === 6 && lastDice === 6) {
      //Player looses score
      scores[activePlayer] = 0;

      document.querySelector("#score-" + activePlayer).textContent = "0";
      nextPayer();
    } else */

    if (dice1 !== 1 && dice2 !== 1) {
      //Add score
      roundScore += dice1 + dice2;

      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next player
      nextPayer();
    }
    //var lastDice = dice;
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    //Add current score to global Score
    scores[activePlayer] += roundScore;

    //Update the UI

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    //Check if player won the game
    var input = document.querySelector(".final-score").value;
    //Undefined ,0,nullor"" are coerced to false
    //anything else is coerced to true
    var winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //Next player
      nextPayer();
    }
  }
});

function nextPayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = window.prompt(
    "Enter first player's name"
  );
  document.getElementById("name-1").textContent = window.prompt(
    "Enter second player's name"
  );
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
