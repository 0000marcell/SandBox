requirejs.config({
	paths: {
		jquery: "https://code.jquery.com/jquery-2.2.4.min.js"
	}
});

require([ 'fake_xml_http_request','route-recognizer', 'jquery', 'server'], function (server){
	server();
});
