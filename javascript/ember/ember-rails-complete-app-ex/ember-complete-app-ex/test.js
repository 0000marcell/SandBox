var str = 
"grant_type=password&username=asd%40asd.com&password=asdasd"
var res = str.split('username=')[1].split('&')[0];
console.log(decodeURIComponent(res));
