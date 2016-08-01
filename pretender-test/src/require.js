requirejs.config({
	paths: {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min",
		pretender: '../node_modules/pretender/pretender'
	}
});

require(['pretender-test/test-jquery', 
				 'prentender-test/server'], function(tjq, server) {
	alert('runing test tjq');
	tjq();
	server();
});

