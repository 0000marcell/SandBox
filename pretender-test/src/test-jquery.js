import $ from 'jquery';

export default function(){
	alert('jquery!');
	$.get('/photos/12', {success: function(data){ 
		console.log('sucess');
	}});
}
