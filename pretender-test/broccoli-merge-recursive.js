const mergeTrees = require('broccoli-merge-trees');
const glob = require('glob');

module.exports = function (path){
	return mergeTrees(glob.sync(path)
				 .map((file) => { 
		return  file.split('/').slice(0, -1).join('/');
	}));
}
