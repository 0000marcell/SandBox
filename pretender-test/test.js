const glob = require('glob');
var path = './src/lib/test.js'
var array = path.split('/').slice(0, -1).join('/');
console.log(array);
