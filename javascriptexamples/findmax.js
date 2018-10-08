
function findMax(arrayNum) {

var largestNum = 0;

for (var i = 0; i < arrayNum.length; i++) {
	if(arrayNum[i] > largestNum) {
	largestNum = arrayNum[i]; 
	}
}
return largestNum;
}
console.log(findMax([18, 2, 8, 87, 65, 33, 54, 12, 90, 25, 76]));
