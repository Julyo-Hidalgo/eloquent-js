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

//dominant writing direction
function dominantDirection(text) {
    scripts = countBy(text, ch => {
        script = characterScript(ch.codePointAt(0));
        return script ? script.direction : "none";
    }); 
    
    scripts = scripts.filter(x => x.name != "none");

	if (scripts.length == 0) return "ltr";

    dominant = 0;
    for (let counter = 1; counter < scripts.length; counter++){
        if(scripts[counter - 1].count < scripts[counter].count){
            dominant = counter;
        }
    }

    return scripts[dominant].name;
}
