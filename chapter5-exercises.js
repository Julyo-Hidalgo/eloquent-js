//flattening
function flatten(matrix){
	let array = matrix.reduce((x, y) => x.concat(y));
	return array;
}

function flatten2.0(matrix){
	let array = matrix.reduce((x, y) => x.concat(y), []); //Adding an initial value to avoid errors with empty arrays
	return array;
}

//your own loop
function loop(value, test, update, body){
	if (test(value)){
		body(value);

		value = update(value);

		loop(value, test, update, body);
	}
}

//everything
function every(array, test){
	for (let elt of array){
		if(!test(elt)){
			return false;
		}
	}

	return true
}

function every2(array, test){
	thereIsInvalidValue = array.some(x => {
		if (test(x)) return false;

		return true;
	});

	if (thereIsInvalidValue) return false;

	return true;
}

function every3(array, test){
	return !array.some(elt => !test(elt));
}
