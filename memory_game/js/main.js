
var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards["queen"])

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
   alert("You found a match!");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry,try again.");
};
}



var flipCard = function() {
  if (flipCard === 1) {
  console.log("User flipped" + cards["king"]);
} checkForMatch();
}

flipCard(0);
flipCard(2);
