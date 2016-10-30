function Init(){
	name = 'marcell';
	return function (){
		console.log(name);
	}
}
name = 'joao';
var obj = Init();
obj.bind(global);
