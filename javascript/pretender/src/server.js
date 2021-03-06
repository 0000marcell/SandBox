import Pretender from 'pretender';
import $ from 'jquery';

export default function(){
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
			return [200, {"Content-Type": "application/json"}, JSON.stringify(PHOTOS[request.params.id])]
		});
	});
} 
