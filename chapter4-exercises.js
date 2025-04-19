//the sum of a range
function sum(array){
	let sum = 0;
	for (let elt of array){
		sum += elt;
	}

	return sum;
}

function range(start, end, step){
	if (step == null) step = 1;

	let array = [];

	if (step > 0){
		for (let i = start; i <= end; i += step){
			array.push(i);
		}
	}else{
		for (let i = start; i >= end; i += step){
			array.push(i);
		}
	}

	return array;
}

//reversing an array
function reverseArray(array){
	let reversedArray = []
	for (let index = array.length -1; index >= 0; index--){
		reversedArray.push(array[index]);
	}

	return reversedArray;
}

function reverseArrayInPlace(array){
	for (let leftIndex = 0, rightIndex = array.length -1; rightIndex > leftIndex; rightIndex--, leftIndex++){
		let temp = array[leftIndex];
		array[leftIndex] = array[rightIndex];
		array[rightIndex] = temp;
	}
}

//a list
function prepend(element, list){
	return {value: element, rest: list};
}

function arrayToList(array){
	let list = null;

	for (let i = array.length - 1; i >= 0; i--){
		list = prepend(array[i], list);
	}
	
	return list;
}

function nth(list, position){
	if (position < 0) return "Error! Not accept negative values!";

	let element = list;

	for	(let i = 0; i < position; i++){
		if (element.rest == null) return undefined;

		element = element.rest;
	}

	return element.value;
}

function listToArray(list){
	let array = [];
	
	for (let i = 1, element = nth(list, 0); element != null; i++){
		array.push(element);
		element = nth(list, i);
	}
	
	return array;
}

//deep comparison
function deepEqual(value1, value2){
	if (typeof value1 == "object" && value1 != null){
		if (typeof value2 == "object" && value2 != null){
			let value1Keys = Object.keys(value1);
			let value2Keys = Object.keys(value2);

			if (value1Keys.length != value2Keys.length) return false;
			
			for (let i = 0; i < value1Keys.length; i++){
				if (value2[value1Keys[i]] == null) return false;

				if (! deepEqual(value1[value1Keys[i]], value2[value1Keys[i]]) )  return false;
			}	

			return true;
		}else{
			return false;
		}
	}

	if (value1 === value2) return true;
	else return false;
}
