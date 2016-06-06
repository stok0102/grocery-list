var suits = ["clubs", "hearts", "diamonds", "spades"]
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
var deck =[]

numbers.forEach(function(number) {
    suits.forEach(function(suit){
  	deck.push(number + " of " + suit);
  });
});
