
var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[3];
cardsInPlay.push(cardOne);


var cardTwo = cards[3];
cardsInPlay.push(cardTwo)

console.log("User flipped queen.");
console.log("User flipped king.");

if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
 alert("You found a match!");
} else {
  console.log("Sorry, try again.");
  alert("Sorry,try again.");
}
