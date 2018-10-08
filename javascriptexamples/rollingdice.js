// function for rolling dice and generating the rolls from a standard 6 sided dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 100; i++) {
  console.log(rollDice());
}


// for rolling dice where we don't know how many sides so we input how many sides
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}