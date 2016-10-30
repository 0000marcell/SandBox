var i, j;
loop1:
for (i = 0; i < 3; i++) {
	loop2:
	for (j = 0; j < 3; j++){
		if(i === 1 && j === 1){
			continue loop1;	
		}
		console.log("i = " + 1 + ", j = "+ j);
	}
}


// labeled statement with break
var allPass = true;
var i, j;

top:
for (i = 0; i < 3; i++) {
	for (j = 0; j < 3; j++) {
		if(i === 2){
			break top;	
		}
	}
	console.log(i);
}
