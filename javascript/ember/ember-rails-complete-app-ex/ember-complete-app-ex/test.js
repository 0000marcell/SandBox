
var str = 
"grant_type=password&username=asd%40asd.com&password=asdasd"
console.log('str', str);
var regex = 'something';
if(str.match(new RegExp(regex))){
	console.log('in the str');
}else{
	console.log('not in the str');
}
/*
var res = str.split('username=')[1].split('&')[0];
console.log(decodeURIComponent(res));
*/
