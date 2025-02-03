//looping a triangle
let triangle = "#";
while (triangle.length < 8){
	console.log(triangle);
	triangle += "#";
}

//fizzbuzz
for (let i = 1; i < 101; i++){
	if((i % 3) == 0 && (i % 5) == 0){
        	console.log("FizzBuzz");
	}

	if ((i % 3) == 0){
        	console.log("Fizz");
	}else if((i % 5) == 0){
        	console.log("Buzz");
	}else{
		console.log(i);
	}
}

//chessboard
let grid = "";
let size = 8;
for (let j = size; j > 0; j--){
	for (let i = size; i > 0; i--){
		if ((j % 2) == 0){
			if ((i % 2) == 0){
				grid += "#";
			}else{
				grid += " ";
			}
		}else{
			if ((i % 2) == 0){
				grid += " ";
			}else{
				grid += "#";
			}
		}
	}
	grid += "\n";
}
console.log(grid);
