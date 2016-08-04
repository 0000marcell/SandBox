function uniq (a, b){
	if(a.indexOf(b) < 0) a.push(b);
	return a;
};

function last (a){
	return a.split('/').pop();
}


