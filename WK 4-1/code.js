// for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show "blastoff at 0"
//for my example we are going to count down from 20 to 0 by 2 sec increments and show "blastoff" at 0
function blastOffTimer() {
    console.log("blastOffTimer() started"); //Displays the Start button was clicked in the console logs
    var currTime = 50; //The start time
    var i = 5; //Variable of intervals
    var timeMult = 5000; //How fast the timer is
    document.getElementById("blastOffText").innerHTML = currTime; //The text that displays the time
    console.log(currTime); //Displays current time in the console log
    currTime = currTime - i; //Displays current time

    setTimeout(function () { //Entire function goes over the countdown from 50 to 0 in 5 second intervals
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 2 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 3 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 4 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 5 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 6 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 7 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 8 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "almost there, 5 sec left";
        } else if (currTime == 10) {
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 10 sec left";
        } else {
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime - i;
    }, 9 * timeMult);

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!";
        currTime = currTime - i;
    }, 10 * timeMult);

}

var numWins = 0; //Base display number of Wins
var numLost = 0; //Base display number of Lost
var numTie = 0; //Base display number of Ties

function playCraps() {
    console.log("playCraps() started...)");
    //display that the button has been clicked in the console log
    var die1 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die1
    var roundDie1 = Math.ceil(die1); //Rounds die1 up
    console.log("The random number is: " + die1);   //display die1 on the browser at the die1Res position
    console.log("The rounded number is: " + roundDie1);  //Display the rounded number of die1
    document.getElementById("die1Res").innerHTML = "The rounded number is: " + roundDie1; //Shows the rounded number for die1 on the browser
    var die2 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die2
    var roundDie2 = Math.ceil(die2); //Rounds die2 up
    console.log("The random number is: " + die2);  //display die2 on the browser at the die2Res position
    console.log("The rounded number is: " + roundDie2); //display the rounded number of die2
    document.getElementById("die2Res").innerHTML = "The rounded number is: " + roundDie2; //Shows the rounded number for die2 on the browser
    var sum = roundDie1 + roundDie2;        //add die1 and die2 up and store in sum
    console.log("The sum of the two dice roll is: " + sum); //Displays the sum of die1 and die2
    document.getElementById("sumRes").innerHTML = "The sum of the two dice roll is: " + sum; // Shows the sum of die1 and die2 in the browser
    if(sum == 7 || sum == 11){ //Shows how to achieve a loss
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!"; //Shows when the player loses in Craps
        numLost = numLost + 1; //Increase Lost counter by 1
    } else if(roundDie1 == roundDie2 && roundDie2 % 2 == 0) { //Shows how to achieve a win
        document.getElementById("crapsRes").innerHTML = "Doubles, you win!!!"; //Shows when the player wins in Craps
        numWins = numWins + 1; //Increase Win counter by 1
    } else { //Shows how to achieve a tie
        document.getElementById("crapsRes").innerHTML = "Tie, please try again."; //Shows when the player ties in Craps
        numTie = numTie + 1; //Increase Tie counter by 1
    }
    document.getElementById("wins").innerHTML = numWins; //Displays wins as the number of rounds won
    document.getElementById("losses").innerHTML = numLost; //Displays losses as the number of rounds lost
    document.getElementById("ties").innerHTML = numTie; //Displays ties as the number of rounds tied

}