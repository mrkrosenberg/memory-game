var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds", 
	cardImage: "images/king-of-diamonds"
}
];
var cardsInPlay = [];


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
//console.log("You found a match!");
} else {
//console.log("Sorry, try again.");
	//wasn't sure which assignment the console.log statements came from 
}
}

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	checkForMatch();
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("That's a match!");
	} else { 
	alert("Sorry, try again!")
	}
}
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);	
}

flipCard(0);
flipCard(1);











