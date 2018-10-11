function luckySevens() {
  // added parseint in order to make the input a integer and not a string
  var startingBet = parseInt(document.getElementById("startingBet").value);
  var totalRoll = 0;
  var winCounter = 0;
  var loseCounter = 0;
  var gameMoney = startingBet;
  var moneyArray = [startingBet];

	if (startingBet <= 0) {
		alert("Starting bet must be greater than 0");
		document.forms["luckySevens"]["startingBet"].value = "";
		return false;
	}
	
	while (gameMoney > 0) {
		totalRoll++;

		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		var sumDice = dice1 + dice2;
	
	if (sumDice == 7) {
		gameMoney = gameMoney + 4; // win
		winCounter++; // how many times you win
		var oldMoney = moneyArray[moneyArray.length - 1]; // shows current amount of money user has
		var newMoney = oldMoney + 4; // updates amount of money user has
		moneyArray.push(newMoney); // add updated amount to end of array
    }

    else {
		gameMoney = gameMoney - 1; //lose
		loseCounter++; // how many times you lose
		var oldMoney = moneyArray[moneyArray.length - 1]; // shows current amount of money user has
		var newMoney = oldMoney - 1; // updates amount of money user has
		moneyArray.push(newMoney); // add updated amount to end of array
    }
    totalRoll = totalRoll++
  }

		// getting max amount of money and max amount of rolls from array
		maxMoney = Math.max(...moneyArray);
		maxRolls = moneyArray.indexOf(maxMoney);
  
	if (maxRolls < 1) {
		maxRolls = 0;
	}
	
	document.getElementById("results").style.display = "inline";
	document.getElementById("startResults").innerText = "$"+startingBet+ ".00";
	document.getElementById("trResults").innerText = totalRoll;
	document.getElementById("highResults").innerText = "$"+maxMoney+ ".00";
	document.getElementById("rcResults").innerText = maxRolls;
	document.getElementById("submitButton").innerHTML = "Play Again";
	return false;

}