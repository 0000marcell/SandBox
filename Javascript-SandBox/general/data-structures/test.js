var obj = { name: 'marcell', surname: 'monteiro' };
var map = new Map(obj);

for(var key in obj){
	console.log(key);
}

console.log([...obj]);

