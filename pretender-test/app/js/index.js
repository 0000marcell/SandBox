import $ from './libs/jquery';

$.get('/photos/12', {success: function(data){ 
	console.log('sucess');
}});
