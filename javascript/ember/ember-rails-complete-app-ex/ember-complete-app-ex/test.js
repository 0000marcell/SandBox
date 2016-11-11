
var str = 
"grant_type=password&username=asd%40asd.com&password=asdasd"
console.log('str', str);
if(/username/.test(str)){
	console.log('in the str');
}else{
	console.log('not in the str');
}
/*
var res = str.split('username=')[1].split('&')[0];
console.log(decodeURIComponent(res));
*/
