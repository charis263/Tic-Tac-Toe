
// Defining variables for Grid Boxes
var boxOne = document.querySelector('.gridOne')
var boxTwo = document.querySelector('.gridTwo')
var boxThree = document.querySelector('.gridThree')
var boxFour = document.querySelector('.gridFour')
var boxFive = document.querySelector('.gridFive')
var boxSix = document.querySelector('.gridSix')
var boxSeven = document.querySelector('.gridSeven')
var boxEight = document.querySelector('.gridEight')
var boxNine = document.querySelector('.gridNine')


// Recognizing Player 1 identity
var playerOneName = document.querySelector(".player1-name")

var playerOneButton = document.querySelector(".player1-btn")
playerOneButton.addEventListener('click',function(){
    var playerOneInput = document.querySelector(".player1-name")
    var playerOneIdentity = document.querySelector(".player1-output")
    playerOneIdentity.textContent = "Player 1 is" + " " + (playerOneInput.value)
})

// Recognizing Player 2 identity
var playerTwoName = document.querySelector(".player2-name")

var playerTwoButton = document.querySelector(".player2-btn")
playerTwoButton.addEventListener('click',function(){
    var playerTwoInput = document.querySelector(".player2-name")
    var playerTwoIdentity = document.querySelector(".player2-output")
    playerTwoIdentity.textContent = "Player 2 is" + " " + (playerTwoInput.value)
})


// Create queues to recognize turns between Player 1 and 2
var playerCounter = 0
// function playerNumber(){
//     playerCounter = 0
//     var n= 0
//     while (n<1){
//         playerCounter= n + 1
//         n = n + 1
//     }
//     return playerCounter
// }

// Defining variable for Player turns
var playerSeq = document.querySelector(".playerTurn")
// Displaying player queues
playerSeq.textContent= playerCounter
if (playerSeq.textContent==0){
    playerSeq.textContent = playerOneName.textContent + "" + "it's your turn"
}else{
    playerSeq.textContent=playerTwoName.textContent + "" + "it's your turn"
}

// Game simulation activity code
// BOX ONE
boxOne.addEventListener("click",function(){
    if (playerCounter == 0){
        if(boxOne.textContent == ""){
            if (boxOne.textContent != "X" && boxTwo.textContent == "X" && boxThree.textContent == "X"){
                boxOne.textContent = "X"
                boxOne.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxOne.textContent != "X" && boxFour.textContent == "X" && boxSeven.textContent == "X"){
                boxOne.textContent = "X"
                boxOne.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxOne.textContent != "X" && boxFive.textContent == "X" && boxNine.textContent == "X"){
                boxOne.textContent = "X"
                boxOne.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter; 
                
                //winning condition
            }else if(boxOne.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxOne.textContent = "X"
                boxOne.style.color = "blue"
                alert("Game is a tie!");
            }else{ //only if empty
                boxOne.textContent = "X"
                boxOne.style.color = "blue"
                playerSeq.textContent = playerTwoName.value +"'s"+ " time to shine!"
                // turnCount()
                playerCounter = 1;
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if(boxOne.textContent == "" ){
            if (boxOne.textContent != "O" && boxTwo.textContent == "O"  && boxThree.textContent == "O"){
                boxOne.textContent = "O"
                boxOne.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if (boxOne.textContent != "O" && boxFour.textContent == "O" && boxSeven.textContent == "O"){
                boxOne.textContent = "O"
                boxOne.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if (boxOne.textContent != "O" && boxFive.textContent == "O" && boxNine.textContent == "O"){
                boxOne.textContent = "O"
                boxOne.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxOne.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxOne.textContent = "O"
                boxOne.style.color = "black"
                alert("Game is a tie!");
            }else{
            boxOne.textContent = "O"
            boxOne.style.color = "black"
            playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
            playerCounter = 0;
            // return playerCounter;
            }
        }
    }
})

// BOX TWO
boxTwo.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxTwo.textContent == "" ){
            if(boxTwo.textContent != "X" && boxOne.textContent == "X" && boxThree.textContent == "X"){
                boxTwo.textContent = "X"
                boxTwo.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxTwo.textContent != "X" && boxFive.textContent == "X" && boxEight.textContent == "X"){
                boxTwo.textContent = "X"
                boxTwo.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxTwo.textContent == "" && boxOne.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxTwo.textContent = "X"
                boxTwo.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxTwo.textContent = "X"
                boxTwo.style.color = "blue"
                playerSeq.textContent = playerTwoName.value + "'s" +  " time to shine!"
                // playerNumber()
                playerCounter = 1;
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if (boxTwo.textContent == "" ){
            if(boxTwo.textContent != "O" && boxOne.textContent == "O"  && boxThree.textContent == "O"){
                boxTwo.textContent = "O"
                boxTwo.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxTwo.textContent != "O" && boxFive.textContent == "O" && boxEight.textContent == "O"){
                boxTwo.textContent = "O"
                boxTwo.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxTwo.textContent == "" && boxOne.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxTwo.textContent = "O"
                boxTwo.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxTwo.textContent = "O"
                boxTwo.style.color = "black"
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                playerCounter = 0;
                // return playerCounter;
            }
        }
    }
})

// BOX THREE
boxThree.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxThree.textContent == "" ){
            if(boxThree.textContent != "X" && boxTwo.textContent == "X" && boxOne.textContent == "X"){
                boxThree.textContent = "X"
                boxThree.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxThree.textContent != "X" && boxFive.textContent == "X" && boxSeven.textContent == "X"){
                boxThree.textContent = "X"
                boxThree.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                return playerCounter;
            }else if(boxThree.textContent != "X" && boxSix.textContent == "X" && boxNine.textContent == "X"){
                boxThree.textContent = "X"
                boxThree.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxThree.textContent == "" && boxTwo.textContent != "" && boxOne.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxThree.textContent = "X"
                boxThree.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxThree.textContent = "X"
                boxThree.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
            
        }
    }else if(playerCounter == 1){ 
        if (boxThree.textContent == "" ){
            if(boxThree.textContent != "O" && boxTwo.textContent == "O" && boxOne.textContent == "O"){
                boxThree.textContent = "O"
                boxThree.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxThree.textContent != "O" && boxFive.textContent == "O" && boxSeven.textContent == "O"){
                boxThree.textContent = "O"
                boxThree.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxThree.textContent != "O" && boxSix.textContent == "O" && boxNine.textContent == "O"){
                boxThree.textContent = "O"
                boxThree.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxThree.textContent == "" && boxTwo.textContent != "" && boxOne.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxThree.textContent = "O"
                boxThree.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxThree.textContent = "O"
                boxThree.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = player1Name.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})

// BOX FOUR
boxFour.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxFour.textContent == "" ){
            if(boxFour.textContent != "X" && boxOne.textContent == "X" && boxSeven.textContent == "X"){
                boxFour.textContent = "X"
                boxFour.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFour.textContent != "X" && boxFive == "X" && boxSix.textContent == "X"){
                boxFour.textContent = "X"
                boxFour.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFour.textContent == "" && boxFive.textContent != "" && boxThree.textContent != "" && boxOne.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxFour.textContent = "X"
                boxFour.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxFour.textContent = "X"
                boxFour.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if (boxFour.textContent == "" ){
            if(boxFour.textContent != "O" && boxOne.textContent == "O" && boxSeven.textContent == "O"){
                boxFour.textContent = "O"
                boxFour.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFour.textContent != "O" && boxFive.textContent == "O" && boxSix.textContent == "O"){
                boxFour.textContent = "O"
                boxFour.style.color = "black"
                playerCounter = 0;
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFour.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxOne.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxFour.textContent = "O"
                boxFour.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxFour.textContent = "O"
                boxFour.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})

// BOX FIVE
boxFive.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxFive.textContent == "" ){
            if(boxFive.textContent != "X" && boxTwo.textContent == "X" && boxEight.textContent == "X"){
                boxFive.textContent = "X"
                boxFive.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFive.textContent != "X" && boxFour.textContent == "X" && boxSix.textContent == "X"){
                boxFive.textContent = "X"
                boxFive.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFive.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxOne.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxFive.textContent = "X"
                boxFive.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxFive.textContent = "X"
                boxFive.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if (boxFive.textContent == "" ){
            if(boxFive.textContent != "O" && boxTwo.textContent == "O" && boxEight.textContent == "O"){
                boxFive.textContent = "X"
                boxFive.style.color = "blue"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFive.textContent != "O" && boxFour.textContent == "O" && boxSix.textContent == "O"){
                boxFive.textContent = "O"
                boxFive.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxFive.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxOne.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxFive.textContent = "O"
                boxFive.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxFive.textContent = "O"
                boxFive.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})

// BOX SIX
boxSix.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxSix.textContent == "" ){
            if(boxSix.textContent != "X" && boxThree.textContent == "X" && boxNine.textContent == "X"){
                boxSix.textContent = "X"
                boxSix.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSix.textContent != "X" && boxFour.textContent == "X" && boxFive.textContent == "X"){
                boxSix.textContent = "X"
                boxSix.style.color = "blue"
                // playerNumber()
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSix.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxOne.textContent != "" && boxNine.textContent != "" && boxEight.textContent != "" && boxSeven.textContent != ""){
                console.log("X")
                boxSix.textContent = "X"
                boxSix.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxSix.textContent = "X"
                boxSix.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
            
        }
    }else if(playerCounter == 1){
        if (boxSix.textContent == "" ){
            if(boxSix.textContent != "O" && boxThree.textContent == "O" && boxNine.textContent == "O"){
                boxSix.textContent = "O"
                boxSix.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSix.textContent != "O" && boxFour.textContent == "O" && boxFive.textContent == "O"){
                boxSix.textContent = "O"
                boxSix.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSix.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxOne.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxSix.textContent = "O"
                boxSix.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxSix.textContent = "O"
                boxSix.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})

// BOX SEVEN
boxSeven.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxSeven.textContent == "" ){
            if(boxSeven.textContent != "X" && boxOne.textContent == "X" && boxFour.textContent == "X"){
                boxSeven.textContent = "X"
                boxSeven.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent != "X" && boxThree.textContent == "X" && boxFive.textContent == "X"){
                boxSeven.textContent = "X"
                boxSeven.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent != "X" && boxEight.textContent == "X" && boxNine.textContent == "X"){
                boxSeven.textContent = "X"
                boxSeven.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxOne.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxSeven.textContent = "X"
                boxSeven.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxSeven.textContent = "X"
                boxSeven.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
            
        }
    }else if(playerCounter == 1){
        if (boxSeven.textContent == "" ){
            if(boxSeven.textContent != "O" && boxOne.textContent == "O" && boxFour.textContent == "O"){
                boxSeven.textContent = "O"
                boxSeven.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent != "O" && boxThree.textContent == "O" && boxFive.textContent == "O"){
                boxSeven.textContent = "O"
                boxSeven.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent != "O" && boxEight.textContent == "O" && boxNine.textContent == "O"){
                boxSeven.textContent = "O"
                boxSeven.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxSeven.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxOne.textContent != "" && boxEight.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxSeven.textContent = "O"
                boxSeven.style.color = "black"
                alert("Game is a tie!");
            }else {
                boxSeven.textContent = "O"
                boxSeven.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})
boxEight.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxEight.textContent == "" ){
            if(boxEight.textContent != "X" && boxTwo.textContent == "X" && boxFive.textContent == "X"){
                boxEight.textContent = "X"
                boxEight.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxEight.textContent != "X" && boxSeven.textContent == "X" && boxNine.textContent == "X"){
                boxEight.textContent = "X"
                boxEight.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxEight.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxOne.textContent != "" && boxNine.textContent != ""){
                console.log("X")
                boxEight.textContent = "X"
                boxEight.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxEight.textContent = "X"
                boxEight.style.color = "blue"
                // playerNumber()
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                playerCounter = 1;
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if (boxEight.textContent == "" ){
            if(boxEight.textContent != "O" && boxTwo.textContent == "O" && boxFive.textContent == "O"){
                boxEight.textContent = "O"
                boxEight.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxEight.textContent != "O" && boxSeven.textContent == "O" && boxNine.textContent == "O"){
                boxEight.textContent = "O"
                boxEight.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxEight.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxOne.textContent != "" && boxNine.textContent != ""){
                console.log("O")
                boxEight.textContent = "O"
                boxEight.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxEight.textContent = "O"
                boxEight.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})
boxNine.addEventListener("click",function(){
    if (playerCounter == 0){
        if (boxNine.textContent == "" ){
            if(boxNine.textContent != "X" && boxThree.textContent == "X" && boxSix.textContent == "X"){
                boxNine.textContent = "X"
                boxNine.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxNine.textContent != "X" && boxOne.textContent == "X" && boxFive.textContent == "X"){
                boxNine.textContent = "X"
                boxNine.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxNine.textContent != "X" && boxSeven.textContent == "X" && boxEight.textContent == "X"){
                boxNine.textContent = "X"
                boxNine.style.color = "blue"
                alert(playerOneName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxNine.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxOne.textContent != ""){
                console.log("X")
                boxNine.textContent = "X"
                boxNine.style.color = "blue"
                alert("Game is a tie!");
            }else{
                boxNine.textContent = "X"
                boxNine.style.color = "blue"
                // playerNumber()
                playerCounter = 1;
                playerSeq.textContent = playerTwoName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }else if(playerCounter == 1){
        if (boxNine.textContent == "" ){
            if(boxNine.textContent != "O" && boxThree.textContent == "O" && boxSix.textContent == "O"){
                boxNine.textContent = "O"
                boxNine.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
                // return playerCounter;
            }else if(boxNine.textContent != "O" && boxNine.textContent == "O" && boxFive.textContent == "O"){
                boxNine.textContent = "O"
                boxNine.style.color = "black"
                alert(playerTwoName.value + "you're a WINNER!")
                // return playerCounter;
            }else if(boxNine.textContent != "O" && boxSeven.textContent == "O" && boxEight.textContent == "O"){
                boxNine.textContent = "O"
                boxNine.style.color = "black"
                alert(playerTwoName.value + " you're a WINNER!")
            }else if(boxNine.textContent == "" && boxTwo.textContent != "" && boxThree.textContent != "" && boxFour.textContent != "" && boxFive.textContent != "" && boxSix.textContent != "" && boxSeven.textContent != "" && boxEight.textContent != "" && boxOne.textContent != ""){
                console.log("O")
                boxNine.textContent = "O"
                boxNine.style.color = "black"
                alert("Game is a tie!");
            }else{
                boxNine.textContent = "O"
                boxNine.style.color = "black"
                playerCounter = 0;
                playerSeq.textContent = playerOneName.value + "'s" + " time to shine!"
                // return playerCounter;
            }
        }
    }
})







// boxOne.addEventListener('click', function(){
//     boxOne.textContent = "X"
// })

// boxTwo.addEventListener('click', function(){
//     boxTwo.textContent = "X"
// })

// boxThree.addEventListener('click', function(){
//     boxThree.textContent = "X"
// })

// boxFour.addEventListener('click', function(){
//     boxFour.textContent = "O"
// })

// boxFive.addEventListener('click', function(){
//     boxFive.textContent = "O"
// })

// boxSix.addEventListener('click', function(){
//     boxSix.textContent = "O"
// })

// boxSeven.addEventListener('click', function(){
//     boxSeven.textContent = "O"
// })

// boxEight.addEventListener('click', function(){
//     boxEight.textContent = "X"
// })

// boxNine.addEventListener('click', function(){
//     boxNine.textContent = "X"
// })

// click submit button to give off alert that we won
// boxOne.addEventListener('click', function(){
//     if (boxOne.textContent== "X" && boxTwo.textContent== "X" && boxThree.textContent== "X") {
//         alert('You won!')
//     }
// })





