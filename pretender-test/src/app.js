import server from './server';
import $ from 'jquery';

$('p').append('marcell');	
server();
$.get('/photos/10', function(data){
	alert(JSON.stringify(data));
});
