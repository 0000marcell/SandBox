requirejs.config({
	paths: {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min",
		pretender: '../bower_components/pretender/pretender',
	}
});

require(['pretender', 'jquery'], function(server, $) {
	alert('gonna create the server and make request');
	createServer();
	$.get('/photos/12', {success: function(data){ 
		console.log('sucess');
	}});

	function createServer(){
		var PHOTOS = {
			"10": {
				id: 10,
				src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif'
			},
			"42": {
				id: 42,
				src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif'
			}
		};

		var server = new Pretender(function(){
			this.get('/photos', function(request){
				var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
				return [200, {"Content-Type": "application/json"}, all]
			});

			this.get('/photos/:id', function(request){
				return [200, {"Content-Type": "application/json"}, 
					JSON.stringify(PHOTOS[request.params.id])]
			});
		});
	}
});
