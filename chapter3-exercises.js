//minimun
function min(n1, n2){
	if (n1 < n2){
		return n1;
	}else{
		return n2;
	}
}

//recursion
function isEven(number){
	if (number < 0){
		console.log("Invalid entry!!!");
		return null;
	}
		
	let i;
	for (i = number; i != 0 && i != 1;){
		i -= 2;
	}
	
	if (i == 1)
		return false
	else
		return true
}

function isEven(number){
	if (number < 0){
		console.log("Invalid entry!!!");
		return null;
	}

	if (number == 1) {
		return false;
	}else{
		if (number == 0) {
			return true;
		}else{
			number -= 2;
			return isEven(number);
		}
	}
}

function isEven(number){
	if (number < 0){
		return isEven(-number);
	}

	if (number == 1) {
		return false;
	}else{
		if (number == 0) {
			return true;
		}else{
			number -= 2;
			return isEven(number);
		}
	}
}

//bean counting
function countBs(string){
	let numberOfBs = 0;

	for (let i = 0; i < (string.length); i ++){
		if (string[i] == "B"){
			numberOfBs ++;
		}
	}

	return numberOfBs;
}

function countChar(string, char){
	let numberOfChars = 0;

	for (let i = 0; i < (string.length); i ++){
		if (string[i] == char){
			numberOfChars ++;
		}
	}

	return numberOfChars;
}
