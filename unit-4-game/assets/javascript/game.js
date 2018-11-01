var wins = 0;
var losses = 0;
var randomNumber;
var userScore;
var crystalImages = ["..\images\crystalone.jpg","..\images\crystaltwo.jpg","..\images\crystalthree.jpg","..\images\crystalfour.jpg"];

startGame();

// start game function
function startGame(){
    // new random number. 
    randomNumber = getRandomNumber(19, 120);
    $(".rN").text(randomNumber);
    // user's score will reset to zero.
    userScore = 0;
    $(".uS").text(userScore);

    class Images {
        constructor(image, value){
        this.image = image;
        this.value = value;
        console.log(value);
    }}
    
    var crystalOne = new Images ("./assets/images/crystalone.jpg", getRandomNumber(1, 12) )
    var crystalTwo = new Images ("./assets/images/crystaltwo.jpg", getRandomNumber(1, 12) )
    var crystalThree = new Images ("./assets/images/crystalthree.jpg", getRandomNumber(1, 12) )
    var crystalFour = new Images ("./assets/images/crystalfour.jpg", getRandomNumber(1, 12) )
    
    var crystals = [crystalOne, crystalTwo, crystalThree, crystalFour]

    // loop through crystals
    for (i = 0; i < 4; i++) { 
        
        var newCrystal = $("<img>").attr("src", crystals[i].image)
        .attr("class", "crystalButtons")
        .attr("data-value", crystals[i].value)
        $(".buttons").append(newCrystal)
    }
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * Math.floor(max));
}

// jQuery click event
$(".buttons").click(function(){
    //  add crystal points to user score. 
    userScore = (crystals[i].value + userScore);
    $(".uS").text(userScore);
    //  update score counter.
    

    if (userScore = randomNumber) {
        alert("Player Wins!");
        wins++;
        startGame();
    }
    else if (userScore > randomNumber) {
        alert("Player Loses!");
        losses++;
        startGame();
    }
        
  });


