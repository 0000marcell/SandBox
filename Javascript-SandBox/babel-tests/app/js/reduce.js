import _ from 'lodash';

let obj = {title: 'todo', name: 'marcell', user: '1'};
let array = [];
Object.keys(obj).forEach((key) => {
	array.push({key: key, value: obj[key]});
});
console.log('result', array);

let finalValue = array.reduce((result, obj) => {
	console.log(result);
	return _.assign(result, {[obj['key']]: obj['value']});
}, {});
